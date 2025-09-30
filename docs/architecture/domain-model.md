# Domain Model

## Core Entities

### Organization
- Represents a tourism business (hotel, tour operator, attraction)
- Has one or more tenants
- Billing entity

### Tenant
- Individual website instance
- Subdomain: `{tenant-slug}.weblynk.app`
- Has its own content, templates, and settings

### User
- Can belong to multiple organizations with different roles
- Authentication via email/password or OAuth

### Site
- Tenant's published website
- Uses template + content + blocks

### Template
- Reusable website layout/structure
- Contains placeholders for blocks

### Block
- Reusable content component (hero, gallery, contact form, etc.)
- Can be customized per tenant
