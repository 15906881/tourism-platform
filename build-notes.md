# Weblynk Build Performance Notes

## Size Budgets
- ✅ Root route: 87.2 kB (under 90 kB budget)
- ✅ Site slug route: 95.4 kB (under 110 kB budget)

## Bundle Analysis
Run bundle analysis with:
\`\`\`bash
pnpm --filter site-renderer build
# Check output for First Load JS sizes
\`\`\`

## Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s  
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## Optimization Status
- ✅ Code splitting implemented
- ✅ Tree shaking working
- ✅ Static generation for root routes
- ✅ Server-side rendering for dynamic routes
- ✅ Image optimization configured

## Monitoring
- Bundle size checked on every build
- Performance budgets enforced in CI
- Regular lighthouse audits recommended
