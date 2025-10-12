#!/usr/bin/env bash
set -euo pipefail

changed=0

while IFS= read -r df; do
  app="$(basename "$(dirname "$df")")"
  bak="${df}.bak"
  echo "→ Processing $df (app=$app)"
  cp "$df" "$bak"

  # 1) Insert ARG APP=<app> after first FROM if missing
  if ! grep -Eq '^[[:space:]]*ARG[[:space:]]+APP\b' "$df"; then
    awk -v app="$app" '
      BEGIN{ins=0}
      /^[[:space:]]*FROM[[:space:]]/ && ins==0 {
        print $0
        print "ARG APP=" app
        ins=1
        next
      }
      {print}
      END{
        if(ins==0){
          printf "ARG APP=%s\n", app
        }
      }
    ' "$bak" > "${df}.tmp" && mv "${df}.tmp" "$df"
    echo "  • Inserted: ARG APP=${app}"
    changed=$((changed+1))
  fi

  # 2) Replace any 'pnpm --filter ... build' with path-based build
  awk '
    /RUN[[:space:]]+pnpm/ && /--filter/ && /build/ {
      print "RUN pnpm -C apps/${APP} build"
      next
    }
    { print }
  ' "$df" > "${df}.tmp" && mv "${df}.tmp" "$df"

  if cmp -s "$df" "$bak"; then
    rm -f "$bak"
    echo "  • No further changes."
  else
    echo "  • Updated and backed up: ${bak}"
  fi
done < <(find apps -type f -name Dockerfile)

echo "Done. Updated $changed Dockerfile(s)."
