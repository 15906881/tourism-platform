#!/usr/bin/env bash
set -euo pipefail

: "${DATABASE_URL:=postgresql:///postgres}"
echo "Applying migrations to $DATABASE_URL"

if command -v pg_isready >/dev/null 2>&1; then
  echo "Waiting for Postgres to accept connections..."
  until pg_isready >/dev/null 2>&1; do sleep 0.5; done
fi

for f in database/migrations/*.sql; do
  [ -e "$f" ] || continue   # skip if no matches
  echo ">> $f"
  psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$f" >/dev/null
done

echo "Done."
