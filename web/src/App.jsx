import React, { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export default function App() {
  const [status, setStatus] = useState("Checking API…");
  const [last, setLast] = useState(null);
  const [loading, setLoading] = useState(false);

  const check = async () => {
    try {
      setLoading(true);
      const r = await fetch(`${API}/health`, { headers: { "cache-control": "no-store" } });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const json = await r.json();
      setStatus("API OK ✅");
      setLast(json);
    } catch (e) {
      setStatus("API unreachable ❌");
      setLast({ error: String(e) });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { check(); }, []);

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", padding: 24, lineHeight: 1.4 }}>
      <h1>Tourism Platform — Web</h1>

      <div style={{ display: "inline-flex", alignItems: "center", gap: 12, margin: "12px 0" }}>
        <span style={{
          padding: "4px 10px",
          borderRadius: 999,
          background: status.includes("OK") ? "#e8fff0" : "#fff0f0",
          border: "1px solid #e2e8f0"
        }}>
          {status}
        </span>
        <button
          onClick={check}
          disabled={loading}
          style={{
            padding: "8px 14px",
            borderRadius: 10,
            border: "1px solid #e2e8f0",
            background: "#fff",
            cursor: loading ? "wait" : "pointer"
          }}
        >
          {loading ? "Pinging…" : "Ping API"}
        </button>
      </div>

      <p>API base: <code>{API}</code></p>

      <pre style={{
        fontSize: 12,
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: 10,
        padding: 12,
        maxWidth: 720,
        overflowX: "auto"
      }}>
        {JSON.stringify(last, null, 2)}
      </pre>
    </main>
  );
}
