# Golden Snapshots Policy

## Purpose
Golden snapshots are immutable records of verified, production-ready builds.

## Rules
- **Read-only**: Never merge golden branches into main/develop
- **Immutable**: Never force-push or delete golden branches/tags
- **Documented**: Each snapshot includes build context, ECR digests, test status
- **Verified**: Only create after successful builds and smoke tests

## Branch Naming
- `golden/YYYYMMDD-HHMM` - Timestamped golden branches
- `golden-YYYYMMDD.N` - Annotated tags for releases

## Workflow
1. Build and test thoroughly
2. Create golden branch with snapshot
3. Push to protected branch
4. Create annotated tag
5. Use digest for deployments

## Protection
- GitHub branch protection on `golden/*`
- GitHub tag protection on `golden-*`
- No force pushes allowed
