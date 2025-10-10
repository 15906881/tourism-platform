export const runtime = "nodejs";
import { NextResponse } from "next/server";

export async function GET() {
  const db = process.env.DATABASE_URL || null;

  // Best-effort parse without leaking secrets
  let host: string | null = null;
  let port: string | null = null;
  let database: string | null = null;

  if (db) {
    const m = db.match(/^postgres(?:ql)?:\/\/[^@]*@([^:\/]+)(?::(\d+))?\/([^?]+)/i);
    if (m) {
      host = m[1] || null;
      port = m[2] || null;
      database = m[3] || null;
    }
  }

  return NextResponse.json({
    ok: true,
    hasDatabaseUrl: !!db,
    databaseUrlHasSchemaCore: !!(db && db.includes("schema=core")),
    parsed: { host, port, database }
  });
}
