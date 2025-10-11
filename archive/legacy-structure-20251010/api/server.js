require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Core middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, ts: new Date().toISOString() });
});

// Root (optional)
app.get("/", (req, res) => {
  res.json({ name: "tourism-platform-api", version: "0.1.0" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
