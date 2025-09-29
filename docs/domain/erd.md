# Domain Model & Multitenancy

## Core Entities

- **Tenant** (id, name, status, plan_id, created_at)
- **User** (id, email, name, status, created_at)
- **UserMembership** (id, user_id, tenant_id, roles[], created_at)
  - *roles: ['owner', 'admin', 'member']*
- **Listing** (id, tenant_id, title, slug, status, summary, primary_media_id, module, module_payload, created_at, updated_at)
- **Media** (id, tenant_id, url, mime, width, height, created_at)
- **Lead** (id, tenant_id, listing_id, source, payload_json, status, created_at)
- **Plan** (id, code, name, features_json, price_cents, interval)
- **AuditLog** (id, tenant_id, actor_user_id, action, entity, entity_id, diff_json, created_at)

---

## Multitenancy Rules

- Every tenant-owned row has `tenant_id` (FK → Tenant.id, **indexed**)
- Access is **scoped by JWT.tenant_id** unless role includes `platform_admin`
- Soft-delete via `status` (active|suspended|deleted) where practical
- **Row-level security**: DB queries must `WHERE tenant_id = :jwt_tenant_id` except for platform_admin queries

---

## Relationships

```
Tenant 1—* Plan (Tenant.plan_id → Plan.id)
Tenant 1—* UserMembership *—1 User
Tenant 1—* Listing
Tenant 1—* Media
Tenant 1—* Lead
Listing 1—* Lead (Lead.listing_id → Listing.id)
Listing 0..1—1 Media (Listing.primary_media_id → Media.id)
```

---

## Vertical Modules

- **Hotel**: RoomType, Availability (date-range), Amenities
- **Salon**: Service, Staff, Timeslots

**Storage approach (decide tomorrow):**

- **Option A** (lightweight): `Listing.module` (enum: 'hotel'|'salon') + `Listing.module_payload` (JSONB, validated via JSON Schema)
- **Option B** (structured): Dedicated tables per module (`hotel_rooms`, `salon_services`) with `listing_id` FK

> **Checklist requirement (Phase 1, Task #3)**: JSON Schemas/TS types for both verticals must be defined and validated server-side.

---

## Role Matrix (Draft)

| Role | Permissions |
|------|-------------|
| **platform_admin** | Full access across all tenants, plans, audit logs |
| **owner** | Full access within tenant (users, listings, settings, billing) |
| **admin** | Manage listings, leads, media; cannot manage users or billing |
| **member** | View listings/leads; cannot edit or manage |

---

## Phase 1 Task #1 Status
✅ ERD entities defined  
✅ tenant_id on all tenant-scoped entities  
✅ Role matrix drafted  
⏳ **Next**: Generate ERD diagram + decide vertical storage approach
