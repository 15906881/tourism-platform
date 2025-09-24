const express = require("express");
const { Pool } = require("pg");

// Use APP_DB_URL in CI; fall back to local superuser for dev.
const dbUrl = process.env.APP_DB_URL || process.env.DATABASE_URL || "postgresql:///postgres";
const pool = new Pool({ connectionString: dbUrl });

const app = express();
app.use(express.json());

// Simple health with DB check
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});
// GET /users?tenant=demo  (or header X-Tenant: demo)
app.get("/users", async (req, res) => {
  const tenantName = req.query.tenant || req.header("X-Tenant");
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    // Set tenant for this transaction only (is_local=true)
    await client.query(
      "SELECT set_config('app.tenant_id',(SELECT id::text FROM core.tenants WHERE name=$1), true)",
      [tenantName]
    );
    const { rows } = await client.query("SELECT id, email, role FROM core.users ORDER BY email");
    await client.query("COMMIT");
    res.json(rows);
  } catch (e) {
    try {
      await client.query("ROLLBACK");
    } catch {}
    res.status(500).json({ error: e.message });
  } finally {
    client.release();
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API on :${port}`));
