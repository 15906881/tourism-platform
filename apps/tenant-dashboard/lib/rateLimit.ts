// apps/tenant-dashboard/lib/rateLimit.ts
type Bucket = { tokens: number; updatedAt: number };

const WINDOW_MS = 60_000;       // 1 minute window
const CAPACITY = 5;             // allow 5 requests per window
const REFILL_RATE = CAPACITY / WINDOW_MS; // tokens per ms

const buckets = new Map<string, Bucket>();

export const limiter = {
  take(key: string): boolean {
    const now = Date.now();
    const b = buckets.get(key) ?? { tokens: CAPACITY, updatedAt: now };

    // Refill tokens since last request
    const elapsed = now - b.updatedAt;
    b.tokens = Math.min(CAPACITY, b.tokens + elapsed * REFILL_RATE);
    b.updatedAt = now;

    if (b.tokens < 1) {
      buckets.set(key, b);
      return false; // rate limited
    }

    b.tokens -= 1;
    buckets.set(key, b);
    return true;
  },
};
