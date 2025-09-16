#!/usr/bin/env bash
set -euo pipefail

: "${DATABASE_URL:?DATABASE_URL is required}"

redact() {
  # hide password when echoing the URL
  printf '%s\n' "${DATABASE_URL}" | sed -E 's#://([^:/]+):([^@]+)@#://\1:******@#'
}

echo "==> Checking DB connectivity to $(redact)"

ok=0
for i in {1..30}; do
  if psql "${DATABASE_URL}" -c "select 1" >/dev/null 2>&1; then
    echo "DB is reachable."
    ok=1
    break
  fi
  printf '  still waiting... (%d/30)\n' "$i"
  sleep 2
done
if [ "$ok" -ne 1 ]; then
  echo "ERROR: DB did not become reachable in time." >&2
  exit 1
fi

echo "==> Running migrations"
psql -v ON_ERROR_STOP=1 "${DATABASE_URL}" -f db/schema.sql
echo "==> Migrations complete"
