#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SQL="$ROOT/database/migrations/0001_init.sql"
if ! command -v psql >/dev/null 2>&1; then
  echo "psql not found — skipping DB apply. Review $SQL and run manually if needed."
  exit 0
fi
: "${DATABASE_URL:=postgres://localhost/postgres}"
echo "Applying $SQL to $DATABASE_URL"
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$SQL"
echo "Done."
