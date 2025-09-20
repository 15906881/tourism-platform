// api/server.js — COMPLETE FILE with route dump + JSON 404 + /test/:id

const express = require("express");
const { Pool } = require("pg");

const dbUrl =
  process.env.APP_DB_URL ||
  process.env.DATABASE_URL ||
  "postgresql:///postgres";

const pool = new Pool({ connectionString: dbUrl });

const app = express();
app.use(express.json());

// ---------- helpers ----------
function getTenantName(req) {
  return req.query.tenant || req.header("X-Tenant");
}

async function withTenant(tenantName, fn) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query(
      "SELECT set_config('app.tenant_id',(SELECT id::text FROM core.tenants WHERE name=$1), true)",
      [tenantName]
    );
    const result = await fn(client);
    await client.query("COMMIT");
    return result;
  } catch (e) {
    try { await client.query("ROLLBACK"); } catch {}
    throw e;
  } finally {
    client.release();
  }
}

// ---------- routes ----------
app.get("/health", async (_req, res) => {
  try {
    const { rows } = await pool.query("SELECT version() AS v");
    res.json({ ok: true, db: rows[0].v });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.post("/tenants", async (req, res) => {
  try {
    const { name } = req.body || {};
    if (!name) return res.status(400).json({ error: "name is required" });
    const { rows } = await pool.query(
      `INSERT INTO core.tenants(name)
       VALUES ($1)
       ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
       RETURNING id, name, created_at`,
      [name]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/users", async (req, res) => {
  const tenantName = getTenantName(req);
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const { email, role = "member" } = req.body || {};
  if (!email) return res.status(400).json({ error: "email is required" });

  try {
    const out = await withTenant(tenantName, async (client) => {
      const q = `
        INSERT INTO core.users (tenant_id, email, role)
        SELECT id, $1, $2 FROM core.tenants WHERE name=$3
        ON CONFLICT (email) DO NOTHING
        RETURNING id, email, role
      `;
      const { rows } = await client.query(q, [email, role, tenantName]);
      if (rows[0]) return rows[0];

      const { rows: r2 } = await client.query(
        "SELECT id, email, role FROM core.users WHERE email=$1",
        [email]
      );
      return r2[0];
    });
    res.json(out);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/users", async (req, res) => {
  const tenantName = getTenantName(req);
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  try {
    const rows = await withTenant(tenantName, async (client) => {
      const { rows } = await client.query(
        "SELECT account_id AS id, email, role FROM core.users_v ORDER BY email"
      );
      return rows;
    });
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/templates", async (req, res) => {
  const tenantName = getTenantName(req);
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  try {
    const rows = await withTenant(tenantName, async (client) => {
      const q = `
        SELECT
          t.id, t.key, t.name, t.category, t.version, t.content,
          COALESCE(tt.enabled, true)               AS enabled,
          COALESCE(tt.overrides, '{}'::jsonb)      AS overrides
        FROM core.templates t
        LEFT JOIN core.tenant_templates tt
          ON tt.template_id = t.id
        ORDER BY t.key
      `;
      const { rows } = await client.query(q);
      return rows;
    });
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/templates/:key", async (req, res) => {
  const tenantName = getTenantName(req);
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  try {
    const row = await withTenant(tenantName, async (client) => {
      const q = `
        SELECT
          t.id, t.key, t.name, t.category, t.version, t.content,
          COALESCE(tt.enabled, true)               AS enabled,
          COALESCE(tt.overrides, '{}'::jsonb)      AS overrides,
          (t.content || COALESCE(tt.overrides,'{}'::jsonb)) AS content_merged
        FROM core.templates t
        LEFT JOIN core.tenant_templates tt
          ON tt.template_id = t.id
        WHERE t.key = $1
      `;
      const { rows } = await client.query(q, [req.params.key]);
      return rows[0];
    });
    if (!row) return res.status(404).json({ error: "template not found" });
    res.json(row);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/tenant-templates", async (req, res) => {
  const tenantName = getTenantName(req);
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  const { template_key, enabled = true, overrides = {} } = req.body || {};
  if (!template_key) {
    return res.status(400).json({ error: "template_key is required" });
  }

  try {
    const out = await withTenant(tenantName, async (client) => {
      const q = `
        INSERT INTO core.tenant_templates (tenant_id, template_id, enabled, overrides)
        SELECT
          (SELECT id FROM core.tenants WHERE name=$1),
          t.id,
          $3::boolean,
          $4::jsonb
        FROM core.templates t
        WHERE t.key = $2
        ON CONFLICT (tenant_id, template_id) DO UPDATE
        SET enabled   = EXCLUDED.enabled,
            overrides = EXCLUDED.overrides,
            updated_at = now()
        RETURNING tenant_id, template_id, enabled, overrides
      `;
      const { rows } = await client.query(q, [tenantName, template_key, enabled, overrides]);
      return rows[0];
    });
    if (!out) return res.status(404).json({ error: "template_key not found" });
    res.json(out);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/tenant-templates", async (req, res) => {
  const tenantName = getTenantName(req);
  if (!tenantName) return res.status(400).json({ error: "Missing tenant" });

  try {
    const rows = await withTenant(tenantName, async (client) => {
      const q = `
        SELECT t.key AS template_key, tt.enabled, tt.overrides
        FROM core.tenant_templates tt
        JOIN core.templates t ON t.id = tt.template_id
        ORDER BY t.key
      `;
      const { rows } = await client.query(q);
      return rows;
    });
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ---- test route (MUST be before 404) ----
app.get("/test/:id", (req, res) => {
  res.json({ message: "test route works", id: req.params.id });
});

// ---- JSON 404 ----
app.use((req, res) => {
  res.status(404).json({ error: "not found", path: req.path });
});

// Dump routes on startup to verify registration
setImmediate(() => {
  const routes = [];
  (app._router?.stack || []).forEach((m) => {
    if (m.route) {
      const methods = Object.keys(m.route.methods)
        .map((k) => k.toUpperCase())
        .join(",");
      routes.push(`${methods} ${m.route.path}`);
    }
  });
  console.log("cwd:", process.cwd());
  console.log("file:", __filename);
  console.log("Registered routes:", routes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API on :${port}`));
