export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { CognitoJwtVerifier } from "aws-jwt-verify";

const verifier = CognitoJwtVerifier.create({
  userPoolId: process.env.COGNITO_USER_POOL_ID!,  // e.g. us-east-1_WgdTIpEMe
  clientId:   process.env.COGNITO_CLIENT_ID!,     // e.g. 1gt42lo3nv530v5mui7i70ec71
  tokenUse:   "id",                               // verify ID tokens
});

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) {
    return NextResponse.json({ ok: false, error: "Missing Bearer token" }, { status: 401 });
  }

  try {
    const payload = await verifier.verify(token);
    const tenantId =
      (payload as any)["custom:tenantId"] ?? (payload as any).tenant_id ?? null;

    return NextResponse.json({
      ok: true,
      sub: payload.sub,
      aud: payload.aud,
      iss: payload.iss,
      tenantId,
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? String(e) }, { status: 401 });
  }
}
