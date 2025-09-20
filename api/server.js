// api/server.js  (complete)
const express = require("express");
const { Pool } = require("pg");

// Prefer APP_DB_URL (CI/containers). Fallback for local dev.
const dbUrl =
  process.env.APP_DB_URL ||
  process.env.DATABASE_URL ||
  "postgresql:///postgres";

// For SSM tunnel (127.0.0.1 -> RDS), the server cert is for *.rds.amazonaws.com.
// That causes a hostname mismatch. For local dev, we disable verification.
const ssl = { rejectUnauthorized: false };

const pool = new Pool({
  connectionString: dbUrl,
  ssl,
});

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
  const t = await client.query("select id from core.tenants where name = $1", [
    tenantName,
  ]);
  if (t.rowCount === 0) {
    throw Object.assign(new Error(`Tenant not found: ${tenantName}`), {
      status: 404,
    });
  }
  const tenantId = t.rows[0].id;
  await client.query("select set_config('app.tenant_id', $1, true)", [
    tenantId,
  ]);
  return tenantId;
}

// ---------- Users (read) ----------
// IMPORTANT: Query base tables so RLS applies (DO NOT use a superuser-owned view here).
app.get("/users", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await setTenantContext(client, tenantName);

    // RLS is enforced on core.memberships; this will only return the current-tenant rows
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

// ---------- Users (create: global account + tenant membership) ----------
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

    // Upsert global account
    const acct = await client.query(
      `insert into core.accounts(email) values ($1)
       on conflict(email) do update set email = excluded.email
       returning id, email`,
      [email]
    );

    // RLS on memberships enforces tenant_id = current app.tenant_id
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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API on :${port}`));
