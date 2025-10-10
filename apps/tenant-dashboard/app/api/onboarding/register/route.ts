export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@weblynk/db/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const auth = req.headers.get("authorization") || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
    
    let userSub, email, tenantId;

    if (process.env.NODE_ENV === 'development' && token === 'dev-token') {
      // Development mode
      userSub = 'dev-user-' + Date.now();
      email = 'dev@example.com';
      tenantId = 'dev-tenant-' + Date.now();
    } else {
      if (!token) return NextResponse.json({ error: "Missing Bearer token" }, { status: 401 });
      return NextResponse.json({ error: "Real auth not implemented" }, { status: 501 });
    }

    const { orgName } = await req.json().catch(() => ({} as any));

    // Use simple create instead of upsert for now
    const tenant = await prisma.tenants.create({
      data: {
        id: tenantId,
        name: orgName || "New Tenant"
      }
    });

    const user = await prisma.users.create({
      data: {
        id: userSub,
        tenant_id: tenant.id,
        email: email || "user@example.com",
        role: "member"
      }
    });

    return NextResponse.json({
      ok: true,
      tenantId: tenant.id,
      userId: user.id,
      mode: "development"
    });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "onboarding failed" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export function GET() {
  return NextResponse.json({ ok: true, route: "POST /api/onboarding/register" });
}
