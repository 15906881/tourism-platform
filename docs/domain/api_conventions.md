# API Conventions & Standards

## Versioning

- All URLs under `/v1` prefix: `https://api.weblynk.app/v1`
- Breaking changes require new major version: `/v2`, `/v3`, etc.
- Non-breaking changes (new fields, new endpoints) can be added to existing version
- Old versions supported for minimum 12 months after deprecation notice

### What Constitutes a Breaking Change
- Removing or renaming fields
- Changing field types
- Changing status codes
- Removing endpoints
- Changing authentication requirements
- Changing URL structure

### Non-Breaking Changes
- Adding new fields (clients ignore unknown fields)
- Adding new endpoints
- Adding new optional parameters
- Adding new error codes
- Making required fields optional

## Pagination

### Offset-Based (Default)

**Request:**
Query parameters:
- `page` - Page number (integer, minimum: 1, default: 1)
- `per_page` - Results per page (integer, minimum: 1, maximum: 200, default: 20)

Example:
```
GET /v1/tenants/9f4a.../listings?page=2&per_page=50
```

**Response:**
```json
{
  "data": [
    { "id": "...", "title": "..." },
    { "id": "...", "title": "..." }
  ],
  "page": 2,
  "per_page": 50,
  "total": 134
}
```

**Calculating total pages (client-side):**
```javascript
const totalPages = Math.ceil(total / per_page);
```

### Cursor-Based (Optional, Future-Proof)

For large datasets or real-time feeds where offset pagination is slow.

**Request:**
Query parameters:
- `cursor` - Opaque cursor string from previous response
- `limit` - Results per page (integer, minimum: 1, maximum: 200, default: 50)

Example:
```
GET /v1/tenants/9f4a.../listings?cursor=eyJpZCI6IjJiMGQiLCJ0IjoxNjk1OTQ3NzAwfQ&limit=50
```

**Response:**
```json
{
  "data": [
    { "id": "...", "title": "..." }
  ],
  "next_cursor": "eyJpZCI6IjdlOGYiLCJ0IjoxNjk1OTQ3ODAwfQ",
  "limit": 50
}
```

**Notes:**
- `next_cursor` is `null` when no more results
- Cursor strings are opaque, do not parse or construct manually
- Cursor pagination not implemented yet (use offset for now)

## Filtering & Sorting

### Common Filter Parameters
- `status` - Filter by status enum (e.g., `?status=published`)
- `q` - Full-text search query (e.g., `?q=hotel`)
- `created_after` / `created_before` - Date range for creation
- `updated_after` / `updated_before` - Date range for updates
- `module` - Filter by vertical (e.g., `?module=hotel`)

### Sorting
- `sort_by` - Field to sort by (e.g., `created_at`, `updated_at`, `title`)
- `sort_order` - Direction: `asc` or `desc` (default: `desc`)

Example:
```
GET /v1/tenants/{id}/listings?status=published&sort_by=updated_at&sort_order=desc
```

## Authentication

### Bearer Token (JWT)
All authenticated endpoints require JWT in Authorization header:
```
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Required JWT Claims
- `sub` - User ID
- `email` - User email
- `aud` - API audience (must match server config)
- `iss` - Token issuer (must match auth provider)
- `tenant_id` - Current tenant scope (optional for platform_admin)
- `roles` - Array of roles (owner, admin, member, platform_admin)

### Public Endpoints (No Auth Required)
- `GET /v1/templates` - Template catalog
- `GET /v1/templates/{id}` - Template details
- `POST /v1/tenants/{id}/leads` - Lead submission (with captcha)
- `POST /v1/invites/{token}/accept` - Accept invite

## Error Responses

### Standard Error Format
```json
{
  "error": "Human-readable error message",
  "code": "MACHINE_READABLE_CODE",
  "details": {
    "field": "additional context"
  }
}
```

### HTTP Status Codes

| Code | Meaning | When to Use |
|------|---------|-------------|
| **200** | OK | Successful GET, PATCH, PUT |
| **201** | Created | Successful POST (resource created) |
| **204** | No Content | Successful DELETE |
| **400** | Bad Request | Malformed JSON, invalid syntax |
| **401** | Unauthorized | Missing or invalid JWT |
| **403** | Forbidden | Valid JWT but insufficient permissions |
| **404** | Not Found | Resource doesn't exist |
| **409** | Conflict | Duplicate resource (e.g., slug already exists) |
| **410** | Gone | Resource permanently deleted (e.g., expired invite) |
| **413** | Payload Too Large | File upload exceeds size limit |
| **415** | Unsupported Media | Wrong file type (e.g., only JPEG/PNG allowed) |
| **422** | Unprocessable | Valid request syntax but semantic validation failed |
| **429** | Too Many Requests | Rate limit exceeded |
| **500** | Internal Server Error | Unexpected server error |

### Error Code Examples

**400 Bad Request (Malformed):**
```json
{
  "error": "Invalid JSON",
  "code": "INVALID_JSON",
  "details": {
    "line": 5,
    "column": 12
  }
}
```

**422 Unprocessable Entity (Validation):**
```json
{
  "error": "Validation failed",
  "code": "VALIDATION_ERROR",
  "details": {
    "field": "slug",
    "reason": "not unique within tenant"
  }
}
```

**422 Unknown Field:**
```json
{
  "error": "Validation failed",
  "code": "UNKNOWN_FIELD",
  "details": {
    "field": "foo_bar",
    "reason": "not allowed"
  }
}
```

**Note:** Write endpoints enforce `additionalProperties: false` unless documented. Unknown fields are rejected to prevent silent typos.

**403 Forbidden (Member Ownership):**
```json
{
  "error": "Insufficient permissions",
  "code": "FORBIDDEN",
  "details": {
    "reason": "member_cannot_edit_others_listing"
  }
}
```

**429 Rate Limit (Bot Risk):**
```json
{
  "error": "Rate limit exceeded",
  "code": "RATE_LIMIT_EXCEEDED",
  "details": {
    "reason": "bot_risk",
    "captcha_score": 0.2
  }
}
```

## Standard Headers

### Request Headers

**Authentication:**
- `Authorization: Bearer {token}` - JWT (required for most endpoints)

**Idempotency:**
- `Idempotency-Key: {uuid}` - Optional but recommended for POST/PUT/PATCH
  - Use same key for retries
  - Server caches response for 24 hours
  - Returns cached response if key seen before

**Conditional Requests:**
- `If-None-Match: {etag}` - Return 304 Not Modified if resource unchanged

**Tracing:**
- `X-Request-Id: {uuid|ulid}` - Optional, echoed in response (generated if missing)

**Content Type:**
- `Content-Type: application/json` - For JSON payloads
- `Content-Type: multipart/form-data` - For file uploads

### Response Headers

**Caching (GET endpoints):**
- `ETag: "W/{resource}:{id}:{timestamp}"` - Resource version identifier
- `Cache-Control: private, max-age=60` - Caching policy

**Rate Limiting (all responses):**
- `RateLimit-Limit` - Max requests per window (e.g., 1000)
- `RateLimit-Remaining` - Requests remaining in current window
- `RateLimit-Reset` - Seconds until window resets

**Tracing:**
- `X-Request-Id` - Unique ID for this request (echoed or generated)

**Idempotency (POST/PUT/PATCH only):**
- `Idempotency-Key` - Echo of submitted key (if provided)

**Security:**
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: no-referrer`

**Deprecation (when applicable):**
- `Deprecation: true`
- `Sunset: Wed, 01 Oct 2026 00:00:00 GMT`
- `Link: <https://docs.weblynk.app/deprecations/v1-foo>; rel="deprecation"`

**Example:**
```
HTTP/1.1 200 OK
Content-Type: application/json
ETag: "W/listing:abc123:1695947700"
Cache-Control: private, max-age=60
X-Request-Id: 550e8400-e29b-41d4-a716-446655440000
RateLimit-Limit: 1000
RateLimit-Remaining: 847
RateLimit-Reset: 3421
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
```

## Rate Limiting

### Default Limits
- **Authenticated users**: 1000 requests/hour per tenant (token bucket)
- **Anonymous (public endpoints)**: 100 requests/hour per IP
- **Platform admin**: 5000 requests/hour

### Rate Limit Keying
- **Authenticated**: `tenant_id` from JWT
- **Anonymous**: Client IP from `X-Forwarded-For` (when behind ALB) or direct connection IP

### When Rate Limited (429 Response)
```json
{
  "error": "Rate limit exceeded",
  "code": "RATE_LIMIT_EXCEEDED"
}
```

Headers:
- `Retry-After: {seconds}` - When to retry
- `RateLimit-Reset: {seconds}` - When window resets

### Anti-Abuse (Public Endpoints)
Public endpoints (lead submission) enforce additional protections:
- Captcha validation required (reCAPTCHA v3 or Cloudflare Turnstile)
- Risk score evaluated: score < 0.5 → **429** with `details.reason = "bot_risk"`
- Optional `X-Captcha-Score` header echoed in response for debugging

### Client Retry Strategy
1. Check `Retry-After` header
2. Wait specified seconds
3. Retry with same `Idempotency-Key`
4. Use exponential backoff if no `Retry-After` provided

## Conditional Requests & Caching

### ETags (Resource Versioning)
All GET endpoints (detail and list) return `ETag` header:
```
ETag: "W/listing:abc123:1695947700"
```

Format: `W/{resource}:{id}:{updated_at_timestamp}`

### Client Usage
Send `If-None-Match` header with cached ETag:
```bash
curl -H "If-None-Match: W/listing:abc123:1695947700" \
  https://api.weblynk.app/v1/tenants/9f4a.../listings/abc123
```

### Server Response
- **304 Not Modified** - Resource unchanged, use cached version
- **200 OK** - Resource changed, new body + updated ETag

### Cache-Control
- **Detail endpoints**: `Cache-Control: private, max-age=60`
- **List endpoints**: `Cache-Control: private, max-age=30`
- **Public endpoints**: `Cache-Control: public, max-age=300`

### Benefits
- Reduced bandwidth (304 = no body)
- Faster response times (cache validation only)
- Optimistic locking (detect concurrent updates)

## Idempotency

### When to Use
Use `Idempotency-Key` header on any mutation (POST/PUT/PATCH) that:
- Creates resources (listings, leads, invites)
- Updates critical data (billing, status changes)
- Might be retried due to network issues

### How It Works
1. Client generates UUID v4: `7c9e6679-7425-40de-944b-e07fc1f90ae7`
2. Client sends request with `Idempotency-Key: {uuid}` header
3. Server processes request and caches response (24hr TTL)
4. If same key sent again within 24hrs, server returns cached response
5. No duplicate resource created, safe to retry

### Status Codes on Replay

**Same parameters (safe replay):**
- Returns **200 OK** or **201 Created** (original status) with cached body
- `Idempotency-Key` header echoed in response

**Different parameters (conflict):**
- Returns **409 Conflict**
- Error body:
  ```json
  {
    "error": "Idempotency key already used with different parameters",
    "code": "IDEMPOTENCY_CONFLICT",
    "details": {
      "original_request_id": "550e8400-e29b-41d4-a716-446655440000"
    }
  }
  ```

### Example
```bash
# First request
curl -X POST https://api.weblynk.app/v1/tenants/9f4a.../listings \
  -H "Authorization: Bearer ..." \
  -H "Idempotency-Key: 7c9e6679-7425-40de-944b-e07fc1f90ae7" \
  -H "Content-Type: application/json" \
  -d '{"title": "Beach Resort"}'

# Response (201 Created)
# Listing created with id: abc123

# Safe retry (same parameters)
curl -X POST https://api.weblynk.app/v1/tenants/9f4a.../listings \
  -H "Authorization: Bearer ..." \
  -H "Idempotency-Key: 7c9e6679-7425-40de-944b-e07fc1f90ae7" \
  -H "Content-Type: application/json" \
  -d '{"title": "Beach Resort"}'

# Response (201 Created, from cache)
# Same listing returned (id: abc123), no duplicate created

# Conflict (different parameters, same key)
curl -X POST https://api.weblynk.app/v1/tenants/9f4a.../listings \
  -H "Authorization: Bearer ..." \
  -H "Idempotency-Key: 7c9e6679-7425-40de-944b-e07fc1f90ae7" \
  -H "Content-Type: application/json" \
  -d '{"title": "Mountain Lodge"}'

# Response (409 Conflict)
# Error: parameters don't match original request
```

## Date & Time Formats

### ISO 8601 DateTime (with timezone)
All timestamps in UTC with `Z` suffix:
```json
{
  "created_at": "2025-09-28T23:35:00Z",
  "updated_at": "2025-09-28T23:35:00Z"
}
```

### Date-Only (for filters)
Use ISO 8601 date format:
```
?created_after=2025-09-01&created_before=2025-09-30
```

Server interprets as:
- `created_after`: `2025-09-01T00:00:00Z` (start of day UTC)
- `created_before`: `2025-09-30T23:59:59Z` (end of day UTC)

## Field Naming Conventions

### JSON Fields
- Use `snake_case` for all field names
- Boolean fields: `is_active`, `has_permission`
- ID fields: `id`, `tenant_id`, `user_id`, `listing_id`
- Timestamps: `created_at`, `updated_at`, `deleted_at`

### Enums
- Use lowercase strings
- Hyphenate multi-word values: `draft`, `published`, `archived`

### Arrays
- Plural names: `roles`, `amenities`, `blocks`

### Nullable Fields
- Use `null` (not empty string or omit)
- Example: `"primary_media_id": null`

## Multitenancy

### Tenant Scoping
- JWT contains `tenant_id` claim
- Server automatically filters queries by `tenant_id`
- Clients should NOT include `tenant_id` in request bodies
- Path includes `{tenantId}` for clarity: `/tenants/{tenantId}/listings`

### Cross-Tenant Access
- **Never allowed for normal users**
- `platform_admin` role can use `X-Tenant-Id` header on `/admin/*` routes only
- Regular users switch tenants via `POST /me/switch-tenant` (issues new JWT)

## File Uploads

### Media Upload Endpoint
```
POST /v1/tenants/{tenantId}/media
Content-Type: multipart/form-data
```

### Limits
- **Max file size**: 10 MB
- **Allowed types**: `image/jpeg`, `image/png`, `image/webp`

### Response
```json
{
  "id": "7e8f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
  "tenant_id": "9f4a7b2c-8d3e-4f1a-9c5b-7e2d8f4a6b3c",
  "url": "https://cdn.weblynk.app/media/7e8f2a3b.jpg",
  "mime": "image/jpeg",
  "width": 1920,
  "height": 1080,
  "created_at": "2025-09-28T23:35:00Z"
}
```

## CORS

### Allowed Origins (Production)
- `https://app.weblynk.com` - Marketing site
- `https://dashboard.weblynk.app` - Tenant dashboard
- `https://admin.weblynk.app` - Platform admin

### Allowed Methods
- `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`

### Exposed Headers
- `X-Request-Id`
- `RateLimit-*`
- `Idempotency-Key`

## Webhooks (Future)

### Event Format
```json
{
  "event": "lead.created",
  "timestamp": "2025-09-28T23:35:00Z",
  "data": {
    "id": "8a7b6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d",
    "tenant_id": "9f4a7b2c-8d3e-4f1a-9c5b-7e2d8f4a6b3c"
  }
}
```

### Delivery
- POST to tenant-configured endpoint
- Retry with exponential backoff (max 3 attempts)
- Signature in `X-Webhook-Signature` header (HMAC SHA256)

## Operational Guarantees

### Availability
- **Target**: 99.9% monthly uptime
- **Excludes**: Scheduled maintenance (announced 7 days in advance)
- **Status page**: https://status.weblynk.app

### Performance SLOs (Service Level Objectives)

| Route Class | P50 Latency | P95 Latency | P99 Latency |
|-------------|-------------|-------------|-------------|
| **Read** (GET detail) | < 100ms | < 200ms | < 300ms |
| **List** (GET with pagination) | < 150ms | < 300ms | < 500ms |
| **Write** (POST/PUT/PATCH) | < 200ms | < 400ms | < 500ms |
| **Media upload** | < 1s | < 3s | < 5s |

Measured from API gateway to response (excludes network transit).

### Rate Limiting Implementation
- **Algorithm**: Token bucket (smooth traffic, allows bursts)
- **Window**: Rolling 1-hour window
- **Burst allowance**: 20% over limit for 60 seconds
- **Reset**: Gradual refill (not fixed window cliff)

### Monitoring
Track these metrics:
- Request rate by endpoint
- Error rate by status code
- P95/P99 latency per route
- Rate limit hit rate (429 responses)
- Cache hit rate (304 responses)
- Idempotency cache hit rate

## Summary

**Key Principles:**
- Simple, flat pagination (no nested objects) with cursor support planned
- Consistent error format with machine-readable codes
- Idempotency support with conflict detection (409)
- Conditional requests via ETags (304 Not Modified)
- Rate limiting with token bucket algorithm
- Request tracing via X-Request-Id (client-supplied or generated)
- Tenant scoping automatic from JWT
- ISO 8601 timestamps in UTC
- snake_case field names
- Unknown fields rejected (prevent typos)
- Security headers enforced (HSTS, nosniff)

**Reference:** 
- `docs/openapi-v1.yaml` - Source of truth for all endpoints
- This document - Implementation conventions and patterns
