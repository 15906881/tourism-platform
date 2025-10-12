#!/bin/bash
# Monorepo-aware project scanner for tourism-platform

echo "=== TOURISM PLATFORM ANALYSIS ==="
git rev-parse --show-toplevel 2>/dev/null || echo "$PWD"

# A. Monorepo structure
printf "\n## MONOREPO STRUCTURE\n"
ls -la apps/ packages/ web/ 2>/dev/null || true
find apps packages web -maxdepth 2 -type f -name "package.json" 2>/dev/null | head -20 || true

# B. Design tokens + Tailwind (check all workspaces)
printf "\n## TOKENS & TAILWIND\n"
find . -name "tailwind.config.*" -not -path "*/node_modules/*" 2>/dev/null || true
find . -path "*/tokens/*" -name "*.json" -not -path "*/node_modules/*" 2>/dev/null | head -10 || true
grep -rn --include="tailwind.config.*" -E 'theme|extend|colors' apps/ packages/ web/ 2>/dev/null | head -20 || true

# C. Component inventory (Radix/shadcn)
printf "\n## COMPONENTS & RADIX/SHADCN\n"
grep -rn --include="*.tsx" --include="*.ts" -E "@radix-ui|shadcn|@/components/ui" apps/ packages/ web/ 2>/dev/null | head -30 || true

# D. DataTable spine
printf "\n## TABLE STACK\n"
grep -rn --include="*.tsx" --include="*.ts" -E "@tanstack/react-table|ag-grid" apps/ packages/ web/ 2>/dev/null | head -20 || true

# E. Accessibility
printf "\n## ACCESSIBILITY\n"
grep -rn --include="*.tsx" --include="*.ts" --include="*.css" -E "aria-|role=|:focus-visible" apps/ packages/ web/ 2>/dev/null | head -30 || true

# F. Motion
printf "\n## MOTION\n"
grep -rn --include="*.tsx" --include="*.ts" -E "framer-motion|layoutId" apps/ packages/ web/ 2>/dev/null | head -20 || true
grep -rn --include="*.css" "prefers-reduced-motion" apps/ packages/ web/ 2>/dev/null || true

# G. Performance
printf "\n## PERFORMANCE\n"
grep -rn --include="*.tsx" --include="*.ts" -E "react-virtual|React\.lazy|dynamic.*import" apps/ packages/ web/ 2>/dev/null | head -20 || true

# H. Testing
printf "\n## TESTING & QA\n"
find . -name ".storybook" -o -name "*.test.*" -o -name "*.spec.*" 2>/dev/null | grep -v node_modules | head -20 || true
grep -rn --include="*.ts" --include="*.tsx" -E "playwright|jest-axe|@axe-core" apps/ packages/ web/ 2>/dev/null | head -15 || true

printf "\n## SUMMARY\n"
echo "Apps: $(find apps -maxdepth 1 -type d 2>/dev/null | wc -l) directories"
echo "Packages: $(find packages -maxdepth 1 -type d 2>/dev/null | wc -l) directories"
echo "Web: $(find web -maxdepth 1 -type d 2>/dev/null | wc -l) directories"
