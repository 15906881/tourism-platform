// api/server.js (complete)

const express = require("express");
const { Pool } = require("pg");

// Connection (root package.json pins express/pg; TLS off for SSM localhost)
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

function shallowMerge(objA, objB) {
  if (!objA && !objB) return {};
  if (!objA) return objB;
  if (!objB) return objA;
  return { ...objA, ...objB }; // simple top-level merge
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

    // Ensure a row exists in tenant_templates for every template (default enabled=true, {})
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
      content: r.content,       // base content only (not merged here)
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

// ---------- Tenant templates: delete override ----------
app.delete("/tenant-templates", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  const templateKey = req.query.template_key;
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

// ---------- Sites ----------
app.post("/sites", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant") || req.body?.tenant;
  const { key, name, domain } = req.body || {};
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });
  if (!name || typeof name !== "string") return res.status(400).json({ error: "name is required" });

  const siteKey = key && typeof key === "string" ? key : "main";

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const up = await client.query(
      `insert into core.sites(tenant_id, key, name, domain)
       values ($1,$2,$3,$4)
       on conflict (tenant_id, key) do update
         set name = excluded.name,
             domain = excluded.domain
       returning id, tenant_id, key, name, domain, created_at`,
      [tenantId, siteKey, name, domain || null]
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

app.get("/sites", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await setTenantContext(client, tenantName);

    const list = await client.query(
      `select id, key, name, domain, created_at
         from core.sites
        order by created_at asc`
    );

    await client.query("COMMIT");
    res.json(list.rows);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Pages ----------
async function getSiteIdByKey(client, tenantId, siteKey) {
  const s = await client.query(
    `select id from core.sites where tenant_id = $1 and key = $2`,
    [tenantId, siteKey]
  );
  if (s.rowCount === 0) {
    const err = new Error(`Site not found: ${siteKey}`);
    err.status = 404;
    throw err;
  }
  return s.rows[0].id;
}

app.post("/sites/:siteKey/pages", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant") || req.body?.tenant;
  const { siteKey } = req.params;
  const { slug, template_key, overrides = {}, published = false } = req.body || {};

  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });
  if (!slug) return res.status(400).json({ error: "slug is required" });
  if (!template_key) return res.status(400).json({ error: "template_key is required" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);

    const siteId = await getSiteIdByKey(client, tenantId, siteKey);

    const t = await client.query(`select id from core.templates where key = $1`, [template_key]);
    if (t.rowCount === 0) {
      const err = new Error(`Template not found: ${template_key}`);
      err.status = 404;
      throw err;
    }

    const up = await client.query(
      `insert into core.pages(site_id, template_id, slug, overrides, published)
       values ($1,$2,$3,$4,$5)
       on conflict (site_id, slug) do update
         set template_id = excluded.template_id,
             overrides   = excluded.overrides,
             published   = excluded.published,
             updated_at  = now()
       returning id, slug, published, updated_at`,
      [siteId, t.rows[0].id, slug, overrides, !!published]
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

app.get("/sites/:siteKey/pages", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  const { siteKey } = req.params;
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);
    const siteId = await getSiteIdByKey(client, tenantId, siteKey);

    const list = await client.query(
      `select p.slug, t.key as template_key, p.published, p.updated_at
         from core.pages p
         join core.templates t on t.id = p.template_id
        where p.site_id = $1
        order by p.slug`,
      [siteId]
    );

    await client.query("COMMIT");
    res.json(list.rows);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

app.get("/sites/:siteKey/pages/:slug", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  const { siteKey, slug } = req.params;
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const tenantId = await setTenantContext(client, tenantName);
    const siteId = await getSiteIdByKey(client, tenantId, siteKey);

    // page + template + tenant overrides
    const row = await client.query(
      `select p.slug, p.overrides as page_overrides, p.published,
              t.id as template_id, t.key as template_key,
              t.name, t.category, t.version, t.content as base_content,
              tt.overrides as tenant_overrides
         from core.pages p
         join core.templates t on t.id = p.template_id
         left join core.tenant_templates tt
           on tt.template_id = t.id and tt.tenant_id = $1
        where p.site_id = $2 and p.slug = $3`,
      [tenantId, siteId, slug]
    );

    if (row.rowCount === 0) {
      const err = new Error(`Page not found: ${slug}`);
      err.status = 404;
      throw err;
    }
    const r = row.rows[0];

    const merged = shallowMerge(
      shallowMerge(r.base_content, r.tenant_overrides || {}),
      r.page_overrides || {}
    );

    await client.query("COMMIT");
    res.json({
      slug: r.slug,
      template_key: r.template_key,
      published: r.published,
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
