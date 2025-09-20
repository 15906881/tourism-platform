const express = require("express");
const { Pool } = require("pg");

// Use APP_DB_URL in CI; fall back to local superuser for dev.
const dbUrl =
  process.env.APP_DB_URL ||
  process.env.DATABASE_URL ||
  "postgresql:///postgres";
const pool = new Pool({ connectionString: dbUrl });

const app = express();
app.use(express.json());

// Simple health with DB check
app.get("/health", async (req, res) => {
  try {
    const { rows } = await pool.query("select version() as v");
    res.json({ ok: true, db: rows[0].v });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// GET /users?tenant=demo  (or header X-Tenant: demo)
// Now reads from compatibility view core.users_v (backed by accounts+memberships).
app.get("/users", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Resolve tenant id first so we can fail fast if it's unknown.
    const t = await client.query(
      "select id from core.tenants where name = $1",
      [tenantName]
    );
    if (t.rowCount === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ error: `Tenant not found: ${tenantName}` });
    }

    // Set tenant for this transaction only (is_local=true) so RLS applies.
    await client.query(
      "select set_config('app.tenant_id', $1, true)",
      [t.rows[0].id]
    );

    // Keep same response shape as before: id, email, role
    const { rows } = await client.query(
      "select account_id as id, email, role from core.users_v order by email"
    );

    await client.query("COMMIT");
    res.json(rows);
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    res.status(500).json({ error: e.message });
  } finally {
    client.release();
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API on :${port}`));
