cd ~/tourism-platform
cat > api/server.js <<'JS'
// api/server.js (complete)

const express = require("express");
const { Pool } = require("pg");

// Connection (TLS off for SSM localhost)
const dbUrl = process.env.APP_DB_URL || process.env.DATABASE_URL || "postgresql:///postgres";
const ssl = { rejectUnauthorized: false };
const pool = new Pool({ connectionString: dbUrl, ssl });

const app = express();
app.use(express.json());

// ---------- Health ----------
app.get("/health", async (_req, res) => {
  try {
    const { rows } = await pool.query("select version() as v");
    res.json({ ok: true, db: rows[0].v });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// ---------- Debug Test ----------
app.get("/test/:id", (req, res) => {
  res.json({ message: "test route works", id: req.params.id });
});

// ---------- Helpers ----------
async function setTenantContext(client, tenantName) {
  const t = await client.query("select id from core.tenants where name = $1", [tenantName]);
  if (t.rowCount === 0) {
    const err = new Error(`Tenant not found: ${tenantName}`);
    err.status = 404;
    throw err;
  }
  const tenantId = t.rows[0].id;
  await client.query("select set_config('app.tenant_id', $1, true)", [tenantId]);
  return tenantId;
}

function shallowMerge(a, b) {
  if (!a && !b) return {};
  if (!a) return b;
  if (!b) return a;
  return { ...a, ...b };
}

// ---------- Users (read) ----------
app.get("/users", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await setTenantContext(client, tenantName);

    const { rows } = await client.query(
      `select m.account_id as id, a.email, m.role
         from core.memberships m
         join core.accounts a on a.id = m.account_id
        order by a.email`
    );

    await client.query("COMMIT");
    res.json(rows);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Tenants (create) ----------
app.post("/tenants", async (req, res) => {
  const { name } = req.body || {};
  if (!name || typeof name !== "string") return res.status(400).json({ error: "name is required" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const up = await client.query(
      `insert into core.tenants(name) values ($1)
       on conflict (name) do update set name = excluded.name
       returning id, name, created_at`,
      [name]
    );
    await client.query("COMMIT");
    res.status(201).json(up.rows[0]);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Users (create) ----------
app.post("/users", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant") || req.body?.tenant;
  const { email, role = "member" } = req.body || {};
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });
  if (!email || typeof email !== "string") return res.status(400).json({ error: "email is required" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const acct = await client.query(
      `insert into core.accounts(email) values ($1)
       on conflict(email) do update set email = excluded.email
       returning id, email`,
      [email]
    );

    const m = await client.query(
      `insert into core.memberships(account_id, tenant_id, role)
       values ($1, $2, $3)
       on conflict (account_id, tenant_id) do update set role = excluded.role
       returning account_id as id, role`,
      [acct.rows[0].id, tenantId, role]
    );

    await client.query("COMMIT");
    res.status(201).json({ id: m.rows[0].id, email: acct.rows[0].email, role: m.rows[0].role });
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Templates (list + ensure tenant rows exist) ----------
app.get("/templates", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    await client.query(
      `insert into core.tenant_templates(tenant_id, template_id, enabled, overrides)
       select $1, t.id, true, '{}'::jsonb
       from core.templates t
       on conflict (tenant_id, template_id) do nothing`,
      [tenantId]
    );

    const all = await client.query(
      `select t.id, t.key, t.name, t.category, t.version, t.content,
              tt.enabled, tt.overrides
         from core.templates t
         left join core.tenant_templates tt
           on tt.template_id = t.id and tt.tenant_id = $1
        order by t.key`,
      [tenantId]
    );

    await client.query("COMMIT");
    res.json(all.rows.map(r => ({
      id: r.id,
      key: r.key,
      name: r.name,
      category: r.category,
      version: r.version,
      content: r.content,
      enabled: r.enabled ?? true,
      overrides: r.overrides ?? {}
    })));
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Single template with merge ----------
app.get("/templates/:key", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const { key } = req.params;
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const t = await client.query(
      `select id, key, name, category, version, content
         from core.templates where key = $1`,
      [key]
    );
    if (t.rowCount === 0) {
      const err = new Error(`Template not found: ${key}`);
      err.status = 404;
      throw err;
    }
    const base = t.rows[0];

    const tt = await client.query(
      `select enabled, overrides
         from core.tenant_templates
        where tenant_id = $1 and template_id = $2`,
      [tenantId, base.id]
    );

    const enabled = tt.rowCount ? tt.rows[0].enabled : true;
    const overrides = tt.rowCount ? tt.rows[0].overrides || {} : {};
    const merged = shallowMerge(base.content, overrides);

    await client.query("COMMIT");
    res.json({
      id: base.id,
      key: base.key,
      name: base.name,
      category: base.category,
      version: base.version,
      content: merged,
      enabled,
      overrides
    });
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Tenant templates: list ----------
app.get("/tenant-templates", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const rows = await client.query(
      `select t.key, coalesce(tt.enabled,true) as enabled, coalesce(tt.overrides,'{}'::jsonb) as overrides
         from core.templates t
         left join core.tenant_templates tt
           on tt.template_id = t.id and tt.tenant_id = $1
        order by t.key`,
      [tenantId]
    );

    await client.query("COMMIT");
    res.json(rows.rows);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Tenant templates: upsert (PUT) ----------
app.put("/tenant-templates", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant") || req.body?.tenant;
  const { template_key, enabled = true, overrides = {} } = req.body || {};
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });
  if (!template_key) return res.status(400).json({ error: "template_key is required" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const t = await client.query(`select id from core.templates where key = $1`, [template_key]);
    if (t.rowCount === 0) {
      const err = new Error(`Template not found: ${template_key}`);
      err.status = 404;
      throw err;
    }

    const up = await client.query(
      `insert into core.tenant_templates(tenant_id, template_id, enabled, overrides)
       values ($1,$2,$3,$4)
       on conflict (tenant_id, template_id)
       do update set enabled = excluded.enabled, overrides = excluded.overrides
       returning tenant_id, template_id, enabled, overrides`,
      [tenantId, t.rows[0].id, !!enabled, overrides]
    );

    await client.query("COMMIT");
    res.json(up.rows[0]);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Tenant templates: delete ----------
app.delete("/tenant-templates", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant") || req.body?.tenant;
  const templateKey = req.query.template_key || req.body?.template_key;
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });
  if (!templateKey) return res.status(400).json({ error: "template_key is required" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const t = await client.query(`select id from core.templates where key = $1`, [templateKey]);
    if (t.rowCount === 0) {
      const err = new Error(`Template not found: ${templateKey}`);
      err.status = 404;
      throw err;
    }

    await client.query(
      `delete from core.tenant_templates where tenant_id = $1 and template_id = $2`,
      [tenantId, t.rows[0].id]
    );

    await client.query("COMMIT");
    res.json({ ok: true, deleted: { template_key: templateKey } });
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Sites: create ----------
app.post("/sites", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant") || req.body?.tenant;
  const { key, name, domain = null } = req.body || {};
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });
  if (!key || !name) return res.status(400).json({ error: "key and name are required" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const up = await client.query(
      `insert into core.sites(tenant_id, key, name, domain)
       values ($1, $2, $3, $4)
       on conflict (tenant_id, key) do update
         set name = excluded.name, domain = excluded.domain
       returning id, tenant_id, key, name, domain, created_at`,
      [tenantId, key, name, domain]
    );

    await client.query("COMMIT");
    res.status(201).json(up.rows[0]);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Sites: list ----------
app.get("/sites", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const rows = await client.query(
      `select key, name, domain, created_at from core.sites
        where tenant_id = $1
        order by key`,
      [tenantId]
    );

    await client.query("COMMIT");
    res.json(rows.rows);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Pages: create for site ----------
app.post("/sites/:siteKey/pages", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant") || req.body?.tenant;
  const { siteKey } = req.params;
  const { slug, template_key, overrides = {}, published = false } = req.body || {};
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });
  if (!slug || !template_key) return res.status(400).json({ error: "slug and template_key are required" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const s = await client.query(`select id from core.sites where tenant_id = $1 and key = $2`, [tenantId, siteKey]);
    if (s.rowCount === 0) {
      const err = new Error(`Site not found: ${siteKey}`);
      err.status = 404; throw err;
    }

    const t = await client.query(`select id from core.templates where key = $1`, [template_key]);
    if (t.rowCount === 0) {
      const err = new Error(`Template not found: ${template_key}`);
      err.status = 404; throw err;
    }

    const up = await client.query(
      `insert into core.pages(site_id, template_id, slug, overrides, published)
       values ($1,$2,$3,$4,$5)
       on conflict (site_id, slug) do update
         set template_id = excluded.template_id,
             overrides   = excluded.overrides,
             published   = excluded.published,
             updated_at  = now()
       returning id, slug, published, created_at, updated_at`,
      [s.rows[0].id, t.rows[0].id, slug, overrides, !!published]
    );

    await client.query("COMMIT");
    res.status(201).json(up.rows[0]);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Pages: list for site ----------
app.get("/sites/:siteKey/pages", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  const { siteKey } = req.params;
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const s = await client.query(`select id from core.sites where tenant_id = $1 and key = $2`, [tenantId, siteKey]);
    if (s.rowCount === 0) {
      const err = new Error(`Site not found: ${siteKey}`);
      err.status = 404; throw err;
    }

    const rows = await client.query(
      `select p.slug, p.published, p.created_at, p.updated_at, t.key as template_key
         from core.pages p
         join core.templates t on t.id = p.template_id
        where p.site_id = $1
        order by p.slug`,
      [s.rows[0].id]
    );

    await client.query("COMMIT");
    res.json(rows.rows);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Pages: get merged content ----------
app.get("/sites/:siteKey/pages/:slug", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  const { siteKey, slug } = req.params;
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const s = await client.query(`select id from core.sites where tenant_id = $1 and key = $2`, [tenantId, siteKey]);
    if (s.rowCount === 0) {
      const err = new Error(`Site not found: ${siteKey}`);
      err.status = 404; throw err;
    }
    const siteId = s.rows[0].id;

    const p = await client.query(
      `select p.id, p.slug, p.overrides as page_overrides, p.published,
              t.id as template_id, t.key as template_key, t.content as base_content
         from core.pages p
         join core.templates t on t.id = p.template_id
        where p.site_id = $1 and p.slug = $2`,
      [siteId, slug]
    );
    if (p.rowCount === 0) {
      const err = new Error(`Page not found: ${slug}`);
      err.status = 404; throw err;
    }
    const row = p.rows[0];

    const tt = await client.query(
      `select overrides
         from core.tenant_templates
        where tenant_id = $1 and template_id = $2`,
      [tenantId, row.template_id]
    );
    const tenantOverrides = tt.rowCount ? (tt.rows[0].overrides || {}) : {};

    const merged = shallowMerge(shallowMerge(row.base_content, tenantOverrides), row.page_overrides);

    await client.query("COMMIT");
    res.json({
      site_key: siteKey,
      slug: row.slug,
      template_key: row.template_key,
      published: row.published,
      content: merged
    });
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- JSON 404 ----------
app.use((req, res) => {
  res.status(404).json({ error: "not found", path: req.path });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API on :${port}`));
JS
