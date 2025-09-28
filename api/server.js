require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

// Core middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Database connection pool for health checks
let dbPool = null;

// Initialize database connection if DB URL is available
if (process.env.APP_DB_URL) {
  dbPool = new Pool({
    connectionString: process.env.APP_DB_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    max: 2, // Small pool for health checks only
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  });
}

// Health check (liveness probe)
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, ts: new Date().toISOString() });
});

// Readiness endpoint - verifies DB connectivity (for ALB health checks)
app.get("/ready", async (req, res) => {
  const startTime = Date.now();
  
  // Check if database is configured
  if (!dbPool) {
    return res.status(503).json({
      ready: false,
      error: "Database not configured",
      timestamp: new Date().toISOString(),
      responseTime: Date.now() - startTime
    });
  }

  try {
    // Test database connectivity with a simple query
    const result = await dbPool.query('SELECT 1 as healthy');
    
    if (result.rows && result.rows[0] && result.rows[0].healthy === 1) {
      res.status(200).json({
        ready: true,
        database: "connected",
        timestamp: new Date().toISOString(),
        responseTime: Date.now() - startTime
      });
    } else {
      throw new Error("Database query returned unexpected result");
    }
  } catch (error) {
    console.error("Database health check failed:", error.message);
    
    res.status(503).json({
      ready: false,
      database: "disconnected",
      error: error.message,
      timestamp: new Date().toISOString(),
      responseTime: Date.now() - startTime
    });
  }
});

// Root (optional)
app.get("/", (req, res) => {
  res.json({ name: "tourism-platform-api", version: "0.1.0" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  if (dbPool) {
    await dbPool.end();
  }
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully');
  if (dbPool) {
    await dbPool.end();
  }
  process.exit(0);
});
