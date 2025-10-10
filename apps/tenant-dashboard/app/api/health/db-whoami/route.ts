import { PrismaClient } from "@weblynk/db/generated/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const prisma = new PrismaClient();
    
    const result = await prisma.$queryRaw`
      SELECT 
        current_database(),
        current_user,
        current_schema(),
        current_setting('search_path') as search_path
    `;
    
    const row = Array.isArray(result) ? result[0] : result;
    
    if (!row) {
      return NextResponse.json({ 
        ok: false, 
        error: "No database connection result" 
      }, { status: 500 });
    }

    const db = row.current_database;
    const user = row.current_user;
    const schema = row.current_schema;
    const searchPath = row.search_path;
    
    await prisma.$disconnect();

    return NextResponse.json({
      ok: true,
      db: db || null,
      user: user || null,
      schema: schema || null,
      search_path: searchPath || null,
      url_has_schema_core: false
    });

  } catch (error: any) {
    console.error("Database health check failed:", error);
    return NextResponse.json({
      ok: false,
      error: error.message
    }, { status: 500 });
  }
}
