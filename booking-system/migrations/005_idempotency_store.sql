-- Create idempotency store table
CREATE TABLE IF NOT EXISTS idempotency_store (
    idempotency_key TEXT PRIMARY KEY,
    request_hash TEXT NOT NULL,
    booking_id TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '24 hours')
);

-- Index for cleanup
CREATE INDEX IF NOT EXISTS idx_idempotency_expires ON idempotency_store(expires_at);

-- Cleanup old idempotency keys
CREATE OR REPLACE FUNCTION cleanup_expired_idempotency()
RETURNS void AS $$
BEGIN
    DELETE FROM idempotency_store WHERE expires_at < NOW();
END;
$$ LANGUAGE plpgsql;
