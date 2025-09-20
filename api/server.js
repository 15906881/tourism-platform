// api/server.js
"use strict";

const express = require("express");
const { Pool } = require("pg");

const dbUrl =
  process.env.APP_DB_URL ||
  process.env.DATABASE_URL ||
  "postgresql:///postgres";

// If sslmode=require is in the URL, pg will use TLS. Respect NODE_TLS_REJECT_UNAUTHORIZED=0 for the local tunnel.
const ssl =
  /sslmode=require/.test(dbUrl)
    ? { rejectUnauthorized: process.env.NODE_TLS_REJECT_UNAUTHORIZED !== "0" }
    : undefined;

const pool = new Pool({ connectionString: dbUrl, ssl });

const app = express();
app.use(express.json());

// ---------- helpers ----------
async function withTenant(tenantName, fn) {
  if (!tenantName) {
    const err = new Error("Missing tenant");
    err.status = 400;
    throw err;
  }
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    // set_config is_local=true so the setting is scoped to this transaction
    await client.query(
      `
      SELECT set_config(
        'app.tenant_id',
        (SELECT id::text FROM core.tenants WHERE name = $1),
        true
      )
    `,
      [tenantName]
    );
    // Ensure tenant existed
    const { rows: chk } = await client.query(
      `SELECT current_setting('app.tenant_id', true) AS tid`
    );
    if (!chk[0]?.tid) {
      const err = new Error(`Unknown tenant: ${tenantName}`);
      err.status = 404;
      throw err;
    }

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

function pickTenant(req) {
  return req.query.tenant || req.header("X-Tenant");
}

// ---------- routes ----------

// Health + DB check
app.get("/health", async (_req, res) => {
  try {
    const { rows } = await pool.query("select version() as v");
    res.json({ ok: true, db: rows[0].v });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// Create tenant
app.post("/tenants", async (req, res) => {
  try {
    const { name } = req.body || {};
    if (!name) return res.status(400).json({ error: "name is required" });
    const { rows } = await pool.query(
      `
      INSERT INTO core.tenants(name)
      VALUES ($1)
      ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
      RETURNING id, name, created_at
    `,
      [name]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// List users for tenant (via users_v view)
app.get("/users", async (req, res) => {
  try {
    const tenantName = pickTenant(req);
    const rows = await withTenant(tenantName, async (client) => {
      const q = `
        SELECT a.id, a.email, m.role
        FROM core.memberships m
        JOIN core.accounts a ON a.id = m.account_id
        WHERE m.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
        ORDER BY a.email
      `;
      const { rows } = await client.query(q);
      return rows;
    });
    res.json(rows);
  } catch (e) {
    res.status(e.status || 500).json({ error: e.message });
  }
});

// Create a user (account + membership) inside a tenant
app.post("/users", async (req, res) => {
  try {
    const tenantName = pickTenant(req);
    const { email, role = "member" } = req.body || {};
    if (!email) return res.status(400).json({ error: "email is required" });

    const row = await withTenant(tenantName, async (client) => {
      // Upsert account by global-unique email
      const acc = await client.query(
        `
        INSERT INTO core.accounts(email)
        VALUES ($1)
        ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
        RETURNING id, email
      `,
        [email]
      );

      // Upsert membership for this tenant
      const mem = await client.query(
        `
        INSERT INTO core.memberships(account_id, tenant_id, role)
        VALUES ($1, NULLIF(current_setting('app.tenant_id', true), '')::uuid, $2)
        ON CONFLICT (account_id, tenant_id)
        DO UPDATE SET role = EXCLUDED.role
        RETURNING account_id AS id, role
      `,
        [acc.rows[0].id, role]
      );

      return { id: mem.rows[0].id, email: acc.rows[0].email, role: mem.rows[0].role };
    });

    res.json(row);
  } catch (e) {
    res.status(e.status || 500).json({ error: e.message });
  }
});

// List templates for tenant with overrides (no deep-merge here; return base + overrides)
app.get("/templates", async (req, res) => {
  try {
    const tenantName = pickTenant(req);
    const rows = await withTenant(tenantName, async (client) => {
      const q = `
        SELECT
          t.id, t.key, t.name, t.category, t.version, t.content,
          COALESCE(tt.enabled, true) AS enabled,
          COALESCE(tt.overrides, '{}'::jsonb) AS overrides
        FROM core.templates t
        LEFT JOIN core.tenant_templates tt
          ON tt.template_id = t.id
         AND tt.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
        ORDER BY t.key
      `;
      const { rows } = await client.query(q);
      return rows;
    });
    res.json(rows);
  } catch (e) {
    res.status(e.status || 500).json({ error: e.message });
  }
});

// Single template (with overrides + a shallow merged "content_merged")
app.get("/templates/:key", async (req, res) => {
  try {
    const tenantName = pickTenant(req);
    const { key } = req.params;

    const row = await withTenant(tenantName, async (client) => {
      const q = `
        SELECT
          t.id, t.key, t.name, t.category, t.version,
          t.content,
          COALESCE(tt.overrides, '{}'::jsonb) AS overrides,
          COALESCE(tt.enabled, true) AS enabled,
          -- shallow jsonb merge: tenant overrides take precedence
          (t.content || COALESCE(tt.overrides, '{}'::jsonb)) AS content_merged
        FROM core.templates t
        LEFT JOIN core.tenant_templates tt
          ON tt.template_id = t.id
         AND tt.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
        WHERE t.key = $1
      `;
      const { rows } = await client.query(q, [key]);
      return rows[0];
    });

    if (!row) return res.status(404).json({ error: `template not found: ${key}` });
    res.json(row);
  } catch (e) {
    res.status(e.status || 500).json({ error: e.message });
  }
});

// List tenant-specific template overrides
app.get("/tenant-templates", async (req, res) => {
  try {
    const tenantName = pickTenant(req);
    const rows = await withTenant(tenantName, async (client) => {
      const q = `
        SELECT
          tt.tenant_id,
          tt.template_id,
          t.key AS template_key,
          tt.enabled,
          tt.overrides,
          tt.created_at,
          tt.updated_at
        FROM core.tenant_templates tt
        JOIN core.templates t ON t.id = tt.template_id
        WHERE tt.tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
        ORDER BY t.key
      `;
      const { rows } = await client.query(q);
      return rows;
    });
    res.json(rows);
  } catch (e) {
    res.status(e.status || 500).json({ error: e.message });
  }
});

// Upsert a tenant override
app.post("/tenant-templates", async (req, res) => {
  try {
    const tenantName = pickTenant(req);
    const { template_key, enabled = true, overrides = {} } = req.body || {};
    if (!template_key) return res.status(400).json({ error: "template_key is required" });

    const row = await withTenant(tenantName, async (client) => {
      // Resolve template id
      const tid = await client.query(`SELECT id FROM core.templates WHERE key = $1`, [template_key]);
      if (!tid.rows[0]) {
        const err = new Error(`template not found: ${template_key}`);
        err.status = 404;
        throw err;
      }

      const { rows } = await client.query(
        `
        INSERT INTO core.tenant_templates(tenant_id, template_id, enabled, overrides)
        VALUES (
          NULLIF(current_setting('app.tenant_id', true), '')::uuid,
          $1,
          $2,
          $3::jsonb
        )
        ON CONFLICT (tenant_id, template_id)
        DO UPDATE SET
          enabled = EXCLUDED.enabled,
          overrides = EXCLUDED.overrides,
          updated_at = now()
        RETURNING tenant_id, template_id, $4::text AS template_key, enabled, overrides
      `,
        [tid.rows[0].id, enabled, JSON.stringify(overrides), template_key]
      );
      return rows[0];
    });

    res.json(row);
  } catch (e) {
    res.status(e.status || 500).json({ error: e.message });
  }
});

// Delete a tenant override
app.delete("/tenant-templates", async (req, res) => {
  try {
    const tenantName = pickTenant(req);
    const { template_key } = req.query;
    if (!template_key) return res.status(400).json({ error: "template_key is required" });

    const ok = await withTenant(tenantName, async (client) => {
      const tid = await client.query(`SELECT id FROM core.templates WHERE key = $1`, [template_key]);
      if (!tid.rows[0]) {
        const err = new Error(`template not found: ${template_key}`);
        err.status = 404;
        throw err;
      }
      const del = await client.query(
        `
        DELETE FROM core.tenant_templates
        WHERE tenant_id = NULLIF(current_setting('app.tenant_id', true), '')::uuid
          AND template_id = $1
      `,
        [tid.rows[0].id]
      );
      return del.rowCount > 0;
    });

    res.json({ ok });
  } catch (e) {
    res.status(e.status || 500).json({ error: e.message });
  }
});

// ---------- start ----------
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API on :${port}`));
