// apps/tenant-dashboard/lib/rateLimit.ts
import type { NextRequest } from "next/server";

export function getClientIp(req: NextRequest | Request): string {
  const h = req.headers;

  // Explicitly type as string | null to help TS narrow correctly
  const xff: string | null = h.get("x-forwarded-for");
  if (typeof xff === "string" && xff.length > 0) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }

  const xRealIp: string | null = h.get("x-real-ip");
  if (typeof xRealIp === "string" && xRealIp.length > 0) {
    return xRealIp;
  }

  // Node runtime only; harmless fallback if not present (Edge won't have socket)
  const reqWithSocket = req as { socket?: { remoteAddress?: string }; ip?: string };
  const maybeSocketIp =
    reqWithSocket?.socket?.remoteAddress ??
    reqWithSocket?.ip;

  if (typeof maybeSocketIp === "string" && maybeSocketIp.length > 0) {
    return maybeSocketIp;
  }

  // Final safe default
  return "0.0.0.0";
}

/**
 * Simple in-memory token bucket limiter.
 * - Window: 1 minute
 * - Capacity: 5 requests per unique key (IP+path)
 *
 * Supports:
 *   await limiter.allow(req)   // Promise<boolean> (for existing code)
 *   limiter.take(req)          // boolean
 *   limiter.take("custom-key") // boolean
 */

type Bucket = { tokens: number; updatedAt: number };

// Defaults (can be tweaked later to read from env if you want)
const WINDOW_MS = 60_000; // 1 minute
const CAPACITY = 5;       // 5 requests per window
const REFILL_RATE = CAPACITY / WINDOW_MS; // tokens per ms

const buckets = new Map<string, Bucket>();

function now() {
  return Date.now();
}

function takeByKey(key: string): boolean {
  const t = now();
  const b = buckets.get(key) ?? { tokens: CAPACITY, updatedAt: t };

  // Refill tokens since last call
  const elapsed = t - b.updatedAt;
  b.tokens = Math.min(CAPACITY, b.tokens + elapsed * REFILL_RATE);
  b.updatedAt = t;

  if (b.tokens < 1) {
    buckets.set(key, b);
    return false; // limited
  }

  b.tokens -= 1;
  buckets.set(key, b);
  return true;
}

function ipFromHeaders(req: Request): string {
  // Prefer X-Forwarded-For (first hop), then other common headers, then localhost
  const h = req.headers;
  const xff = h.get("x-forwarded-for");
  if (xff) {
    const firstIp = xff.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  return (
    h.get("x-real-ip") ||
    h.get("cf-connecting-ip") ||
    h.get("x-client-ip") ||
    "127.0.0.1"
  );
}

function keyFromRequest(req: Request): string {
  const ip = ipFromHeaders(req);
  const ua = req.headers.get("user-agent") || "";
  const path = (() => {
    try {
      return new URL(req.url).pathname;
    } catch {
      return "/";
    }
  })();

  // Key: IP + path + coarse UA
  return `${ip}::${path}::${ua.slice(0, 40)}`;
}

export const limiter = {
  /**
   * Take a token for a given key or Request. Returns true if allowed.
   */
  take(keyOrReq: string | Request): boolean {
    const key = typeof keyOrReq === "string" ? keyOrReq : keyFromRequest(keyOrReq);
    return takeByKey(key);
  },

  /**
   * Promise form to match code that used: await limiter.allow(req)
   */
  async allow(req: Request): Promise<boolean> {
    return this.take(req);
  },

  /**
   * Build the limiter key from a Request (useful in logs/tests).
   */
  key(req: Request): string {
    return keyFromRequest(req);
  },

  /**
   * Testing/maintenance helper.
   */
  _reset(): void {
    buckets.clear();
  },
};