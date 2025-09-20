const express = require("express");
const { Pool } = require("pg");

// Prefer APP_DB_URL (CI/containers). Fallback for local dev.
const dbUrl =
  process.env.APP_DB_URL ||
  process.env.DATABASE_URL ||
  "postgresql:///postgres";

// For SSM tunnel (127.0.0.1 -> RDS), the server cert is for *.rds.amazonaws.com.
// That causes a hostname mismatch. To keep local dev simple, we disable verification.
const ssl = { rejectUnauthorized: false };

const pool = new Pool({
  connectionString: dbUrl,
  ssl,
});

const app = express();
app.use(express.json());

// Health check with DB probe
app.get("/health", async (_req, res) => {
  try {
    const { rows } = await pool.query("select version() as v");
    res.json({ ok: true, db: rows[0].v });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// GET /users?tenant=demo   or   header: X-Tenant: demo
// Reads from compatibility view core.users_v (accounts + memberships).
app.get("/users", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Resolve tenant id; fail fast if not found.
    const t = await client.query(
      "select id from core.tenants where name = $1",
      [tenantName]
    );
    if (t.rowCount === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ error: `Tenant not found: ${tenantName}` });
    }

    // Set tenant for this transaction only so RLS applies.
    await client.query(
      "select set_config('app.tenant_id', $1, true)",
      [t.rows[0].id]
    );

    // Keep the same shape as before: id, email, role
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
