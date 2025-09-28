import React, { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export default function App() {
  const [status, setStatus] = useState("Checking API…");
  useEffect(() => {
    fetch(`${API}/health`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(() => setStatus("API OK ✅"))
      .catch(() => setStatus("API unreachable ❌"));
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h1>Tourism Platform — Web</h1>
      <p>{status}</p>
      <p>
        API: <code>{API}</code>
      </p>
    </main>
  );
}
