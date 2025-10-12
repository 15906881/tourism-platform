import { createHmac, timingSafeEqual } from 'crypto';

export const ONB_COOKIE = 'onb_tenant';
export const ONB_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// Centralize the secret and enforce that it's set in production.
const SECRET =
  process.env.ONBOARDING_SIGNING_SECRET ||
  process.env.NEXTAUTH_SECRET ||
  '';

if (process.env.NODE_ENV === 'production' && !SECRET) {
  throw new Error('ONBOARDING_SIGNING_SECRET (or NEXTAUTH_SECRET) must be set in production');
}

function secret(): string {
  // In dev, fall back to a deterministic value to ease local testing.
  return SECRET || 'dev-secret-change-me';
}

/**
 * Produce "<tenantId>.<base64url(hmac256(tenantId, secret))>"
 */
export function signTenantId(tenantId: string): string {
  const mac = createHmac('sha256', secret()).update(tenantId).digest('base64url');
  return `${tenantId}.${mac}`;
}

/**
 * Verify cookie token and return the plain tenantId if valid; otherwise null.
 */
export function verifyTenantCookie(raw: string | undefined): string | null {
  if (!raw) return null;
  const dot = raw.lastIndexOf('.');
  if (dot <= 0) return null;

  const tenantId = raw.slice(0, dot);
  const macB64 = raw.slice(dot + 1);

  const expected = createHmac('sha256', secret()).update(tenantId).digest();
  const actual = Buffer.from(macB64, 'base64url');
  if (expected.length !== actual.length) return null;

  try {
    if (timingSafeEqual(expected, actual)) return tenantId;
  } catch {
    return null;
  }
  return null;
}
