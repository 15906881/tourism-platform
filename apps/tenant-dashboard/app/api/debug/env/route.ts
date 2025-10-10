export const runtime = "nodejs";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    DATABASE_URL: process.env.DATABASE_URL ? "SET" : "NOT SET",
    DATABASE_URL_LENGTH: process.env.DATABASE_URL?.length,
    COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID ? "SET" : "NOT SET",
  });
}
