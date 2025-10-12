#!/usr/bin/env bash
set -euo pipefail
: "${APP_DB_URL:?set APP_DB_URL to your Postgres connection string}"
shopt -s nullglob
for f in database/migrations/*.sql; do
  echo "==> applying $f"
  psql "$APP_DB_URL" -v ON_ERROR_STOP=1 -f "$f"
done
echo "✅ migrations complete"
