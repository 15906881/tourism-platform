#!/usr/bin/env bash
set -euo pipefail

echo "Applying migrations to ${DATABASE_URL}"

# Wait for Postgres to be ready
for i in {1..60}; do
  if psql "$DATABASE_URL" -c "select 1" >/dev/null 2>&1; then
    echo "Postgres is ready."
    break
  fi
  echo "Waiting for Postgres... ($i/60)"
  sleep 2
done

# Run schema file(s)
psql -v ON_ERROR_STOP=1 "$DATABASE_URL" -f db/schema.sql
