export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { PrismaClient } from "@weblynk/db/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const rows = await prisma.$queryRaw<
      { db: string; usr: string; sch: string; sp: string }[]
    >`SELECT current_database() AS db, current_user AS usr, current_schema() AS sch, current_setting('search_path') AS sp;`;
    const row = rows[0];

    return NextResponse.json({
      ok: true,
      db: row.db,
      user: row.usr,
      schema: row.sch,
      search_path: row.sp,
      url_has_schema_core: !!(process.env.DATABASE_URL || '').includes('schema=core')
    });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message ?? String(e) }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
