#!/bin/bash
echo "======================================"
echo "  TOURISM PLATFORM AUDIT"
echo "======================================"
echo ""

# Helper function to check if something exists
check_exists() {
  local item="$1"
  local search_pattern="$2"
  local search_path="$3"
  
  if grep -rq --include="*.ts" --include="*.tsx" --include="*.js" --include="*.json" "$search_pattern" $search_path 2>/dev/null; then
    echo "✅ $item"
    return 0
  else
    echo "❌ $item"
    return 1
  fi
}

check_file() {
  local item="$1"
  local file_path="$2"
  
  if [ -f "$file_path" ] || [ -d "$file_path" ]; then
    echo "✅ $item"
    return 0
  else
    echo "❌ $item"
    return 1
  fi
}

echo "## INFRASTRUCTURE & SETUP"
check_file "Monorepo (Turborepo)" "turbo.json"
check_file "pnpm workspace" "pnpm-workspace.yaml"
check_file "Docker config" "Dockerfile"
check_file "Docker Compose" "docker-compose.yml"
check_file "Environment example" ".env.example"
check_file "GitHub workflows" ".github"

echo ""
echo "## APPLICATIONS"
check_file "Admin app" "apps/admin"
check_file "Tenant Dashboard" "apps/tenant-dashboard"
check_file "Site Renderer" "apps/site-renderer"
check_file "Photos Entry" "apps/photos-entry"
check_file "Onboarding" "apps/onboarding"

echo ""
echo "## PACKAGES"
check_file "Database package (@weblynk/db)" "packages/db"
check_file "Auth package" "packages/auth"
check_file "UI package" "packages/ui"
check_file "Server package" "packages/server"
check_file "Templates package" "packages/templates"
check_file "Blocks package" "packages/blocks"
check_file "API client" "packages/api-client"
check_file "Design tokens" "packages/tokens"

echo ""
echo "## BACKEND & API"
check_file "API directory" "api"
check_exists "tRPC setup" "from.*@trpc" "apps/ packages/"
check_exists "React Query" "@tanstack/react-query" "apps/"
check_exists "Database client" "drizzle\\|prisma\\|@weblynk/db" "packages/ apps/"
check_file "Database migrations" "database"
check_file "OpenAPI spec" "openapi"

echo ""
echo "## AUTHENTICATION"
check_exists "NextAuth.js" "next-auth" "apps/"
check_file "Cognito docs" "COGNITO_SETUP.md"
check_exists "Auth provider" "AuthProvider\\|SessionProvider" "apps/ packages/"

echo ""
echo "## DESIGN SYSTEM"
check_file "Design tokens (Luxury theme)" "packages/tokens/themes/luxury.json"
check_exists "CSS variables" ":root.*--color\\|--space\\|--radius" "packages/ui"
check_exists "Typography system" "--font-heading\\|--font-body" "packages/ui"
check_exists "Color system" "--color-primary\\|--color-accent" "packages/ui"
check_exists "Motion/Animation" "@keyframes\\|--duration\\|--easing" "packages/ui"
check_exists "Reduced motion support" "prefers-reduced-motion" "packages/ui"

echo ""
echo "## UI COMPONENTS"
check_file "UI components directory" "packages/ui/components"
check_exists "Button components" "btn-primary\\|Button" "packages/ui"
check_exists "Card components" "\\.card\\|Card" "packages/ui"
check_exists "Input components" "\\.input\\|Input" "packages/ui"

echo ""
echo "## MISSING: COMPONENT LIBRARIES"
check_exists "Radix UI primitives" "@radix-ui" "packages/ apps/"
check_exists "shadcn/ui components" "shadcn\\|@/components/ui" "packages/ apps/"
check_exists "Form library (react-hook-form)" "react-hook-form\\|useForm" "apps/ packages/"

echo ""
echo "## MISSING: DATA TABLES"
check_exists "TanStack Table" "@tanstack/react-table" "apps/ packages/"
check_exists "AG Grid" "ag-grid" "apps/ packages/"
check_exists "Any table library" "DataTable\\|useTable\\|table.*sort" "apps/ packages/"

echo ""
echo "## MISSING: ANIMATIONS"
check_exists "Framer Motion" "framer-motion" "apps/ packages/"
check_exists "React Spring" "react-spring" "apps/ packages/"

echo ""
echo "## ACCESSIBILITY"
check_exists "ARIA attributes (in actual code)" "aria-label\\|aria-describedby\\|role=" "apps/admin apps/tenant-dashboard apps/site-renderer"
check_exists "Focus management" ":focus-visible\\|focus:" "packages/ui"
check_exists "Keyboard navigation" "onKeyDown\\|KeyboardEvent" "apps/ packages/"

echo ""
echo "## MISSING: TESTING"
check_file "Test directory" "tests"
check_file "E2E directory" "e2e"
check_exists "Jest config" "jest.config" "."
check_exists "Vitest config" "vitest.config" "."
check_exists "Playwright tests" "@playwright/test" "tests e2e apps packages"
check_exists "Unit tests (*.test.ts)" "\\.test\\.tsx?\\|\\.spec\\.tsx?" "apps packages"
check_exists "React Testing Library" "@testing-library/react" "apps packages"

echo ""
echo "## MISSING: STORYBOOK"
check_file "Storybook config" ".storybook"
check_exists "Story files" "\\.stories\\.tsx?" "apps packages"

echo ""
echo "## DOCUMENTATION"
check_file "README" "README.md"
check_file "Technical architecture doc" "tourism-platform_technical-architecture_v4_ship-ready.md"
check_file "User journey doc" "tourism-platform_onboarding-user-journey_v1_ship-ready.md"
check_file "Deployment checklist" "DEPLOYMENT_CHECKLIST.md"
check_file "Docs directory" "docs"

echo ""
echo "## CODE QUALITY"
check_file "ESLint config" "eslint.config.cjs"
check_file "Prettier config" ".prettierrc.json"
check_file "TypeScript config" "tsconfig.json"
check_file "Git hooks" ".githooks"

echo ""
echo "## DEPLOYMENT"
check_file "Infrastructure config" "infra"
check_file "Production configs" "production-configs"
check_file "CI/CD workflows" ".github/workflows"
check_file "Database setup script" "setup_neon_db.sh"

echo ""
echo "======================================"
echo "  SUMMARY"
echo "======================================"
TOTAL=$(grep -E "^✅|^❌" <<< "$(bash $0 2>/dev/null)" | wc -l)
COMPLETED=$(grep "^✅" <<< "$(bash $0 2>/dev/null)" | wc -l)
MISSING=$(grep "^❌" <<< "$(bash $0 2>/dev/null)" | wc -l)

echo "Total items checked: $TOTAL"
echo "Completed: $COMPLETED"
echo "Missing: $MISSING"
echo "Completion: $(echo "scale=1; $COMPLETED * 100 / $TOTAL" | bc)%"
