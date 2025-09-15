#!/usr/bin/env bash
set -euo pipefail
: "${DATABASE_URL:?DATABASE_URL is required}"

echo "Applying migrations to ${DATABASE_URL//:\/\/[^@]*@/:\/\/***@}"
echo "Waiting for Postgres to accept connections..."
for i in {1..120}; do
  if psql "$DATABASE_URL" -c "select 1" >/dev/null 2>&1; then
    echo "Postgres is up."
    break
  fi
  sleep 1
  if (( i == 120 )); then
    echo "ERROR: Postgres never became ready." >&2
    exit 1
  fi
done

echo "Running migrations..."
psql -v ON_ERROR_STOP=1 "$DATABASE_URL" -f db/schema.sql
