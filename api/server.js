// api/server.js  (complete)
const express = require("express");
const { Pool } = require("pg");

const dbUrl =
  process.env.APP_DB_URL ||
  process.env.DATABASE_URL ||
  "postgresql:///postgres";

// For local SSM tunnel to RDS we disable hostname verification.
// IMPORTANT: turn this OFF in prod by removing rejectUnauthorized: false and
// installing the RDS CA cert.
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

// ---------- Helper to set tenant context ----------
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
  if (!name || typeof name !== "string")
    return res.status(400).json({ error: "name is required" });

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
  if (!email || typeof email !== "string")
    return res.status(400).json({ error: "email is required" });

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

// ---------- Templates (read per-tenant; merged with overrides) ----------
app.get("/templates", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await setTenantContext(client, tenantName);

    const { rows } = await client.query(
      `select
          t.id,
          t.key,
          t.name,
          t.category,
          t.version,
          t.content,
          coalesce(tt.enabled, true) as enabled,
          coalesce(tt.overrides, '{}'::jsonb) as overrides
        from core.templates t
        left join core.tenant_templates tt
               on tt.template_id = t.id
        order by t.key`
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

// ---------- Template by key (merged) ----------
app.get("/templates/:key", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const { key } = req.params;

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await setTenantContext(client, tenantName);

    const q = await client.query(
      `select
          t.id,
          t.key,
          t.name,
          t.category,
          t.version,
          t.content,
          coalesce(tt.enabled, true) as enabled,
          coalesce(tt.overrides, '{}'::jsonb) as overrides
        from core.templates t
        left join core.tenant_templates tt
               on tt.template_id = t.id
       where t.key = $1`,
      [key]
    );

    await client.query("COMMIT");

    if (q.rowCount === 0) return res.status(404).json({ error: `Template not found: ${key}` });
    res.json(q.rows[0]);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

// ---------- Tenant overrides: upsert ----------
app.post("/tenant-templates", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant") || req.body?.tenant;
  const { template_key, enabled, overrides } = req.body || {};
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });
  if (!template_key || typeof template_key !== "string")
    return res.status(400).json({ error: "template_key is required" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    await setTenantContext(client, tenantName);

    const tpl = await client.query("select id from core.templates where key=$1", [template_key]);
    if (tpl.rowCount === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ error: `Template not found: ${template_key}` });
    }

    const tId = tpl.rows[0].id;

    const up = await client.query(
      `insert into core.tenant_templates(tenant_id, template_id, enabled, overrides)
       values (NULLIF(current_setting('app.tenant_id', true), '')::uuid, $1, coalesce($2,true), coalesce($3,'{}'::jsonb))
       on conflict (tenant_id, template_id)
       do update set
         enabled   = coalesce(EXCLUDED.enabled, core.tenant_templates.enabled),
         overrides = coalesce(EXCLUDED.overrides, core.tenant_templates.overrides),
         updated_at = now()
       returning tenant_id, template_id, enabled, overrides`,
      [tId, enabled, overrides]
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

// ---------- Tenant overrides: list for tenant ----------
app.get("/tenant-templates", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await setTenantContext(client, tenantName);

    const { rows } = await client.query(
      `select
          tt.template_id,
          t.key,
          t.name,
          tt.enabled,
          tt.overrides,
          tt.created_at,
          tt.updated_at
         from core.tenant_templates tt
         join core.templates t on t.id = tt.template_id
        order by t.key`
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

// ---------- Tenant overrides: delete one ----------
app.delete("/tenant-templates", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  const { template_key } = req.query;
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });
  if (!template_key) return res.status(400).json({ error: "Missing template_key query param" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await setTenantContext(client, tenantName);

    const tpl = await client.query("select id from core.templates where key=$1", [template_key]);
    if (tpl.rowCount === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ error: `Template not found: ${template_key}` });
    }

    // RLS enforces current tenant on delete.
    const del = await client.query(
      `delete from core.tenant_templates
        where template_id = $1
        returning tenant_id, template_id`,
      [tpl.rows[0].id]
    );

    await client.query("COMMIT");
    if (del.rowCount === 0) return res.status(404).json({ error: "No override to delete" });
    res.json({ ok: true });
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(e.status || 500).json({ error: e.message });
  } finally {
    client.release();
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API on :${port}`));
