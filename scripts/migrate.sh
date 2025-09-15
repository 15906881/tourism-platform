#!/usr/bin/env bash
set -euo pipefail

# Log everything to ci_migrate.log and stdout
exec > >(tee -a ci_migrate.log) 2>&1

echo "==> psql version"
psql --version || true

echo "==> DATABASE_URL (redacted)"
echo "${DATABASE_URL}" | sed -E 's#(//[^:/]+):[^@]+#\1:******#'

echo "==> Waiting for Postgres on host 'postgres'..."
ok=0
for i in {1..60}; do
  if pg_isready -h postgres -p 5432 -U postgres -d postgres >/dev/null 2>&1; then
    if psql "$DATABASE_URL" -c "select 1" >/dev/null 2>&1; then
      echo "DB is reachable."
      ok=1
      break
    fi
  fi
  printf '  still waiting... (%d/60)\n' "$i"
  sleep 2
done
if [ "$ok" -ne 1 ]; then
  echo "ERROR: Postgres did not become reachable in time." >&2
  exit 1
fi

echo "==> Running migrations"
psql -v ON_ERROR_STOP=1 "$DATABASE_URL" -f db/schema.sql
echo "==> Migrations complete"
