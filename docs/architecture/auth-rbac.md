# Authentication & Authorization

## Roles

### Super Admin
- Platform-level access
- Can manage all organizations

### Organization Owner
- Full control over their organization
- Can manage tenants and billing

### Organization Admin
- Can manage tenants and content
- Cannot manage billing

### Editor
- Can edit content and blocks
- Cannot publish

### Viewer
- Read-only access

## Permission Model
Permissions are role-based and scoped to organizations.

## Authentication Flow
1. User signs up/signs in
2. JWT token issued
3. Token verified on each request
4. Permissions checked
