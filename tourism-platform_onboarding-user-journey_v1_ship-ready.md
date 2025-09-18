# Tourism Platform — Onboarding User Journey (Ship‑Ready)

**Persona:** Margaret (Kenyan safari lodge owner) • **Device:** Samsung Galaxy A15 • **Network:** 3G/2G fallback  
**Goal:** Get a professional site live in < 5 minutes to drive direct bookings

---

## Phase 1: Discovery & Landing

**Entry:** WhatsApp link, Google, Facebook ad  
**Key UX:** <3s load on 3G; EN/SW toggle; scannable; social proof; price clarity  
**Tech:** Progressive images, skeletons, service worker; analytics for scroll/CTA/language

---

## Phase 2: Signup & Business Info

**Form:** WhatsApp number (primary), Business name, Type, Country/City, Languages  
**Smart defaults:** IP geolocate; SMS OTP (Africa’s Talking); prefill; auto‑save drafts  
**Errors:** number exists → “Login?”; poor connection → spinner; resend SMS after 30s

---

## Phase 3: Template Selection

**Gallery:** Filter by business type; large recommended cards; realistic African content  
**Preview:** Full‑screen; mobile/tablet/desktop; “With your content” toggle; “Start customizing”  
**Tech:** Template metadata API; WebP sizes; responsive preview iframe; selection initializes tenant

---

## Phase 4: Basic Customization

**Wizard Steps:**

1. Business details (name, tagline, contact, location)
2. Upload photos (logo + 3–5 images; camera/gallery; compression; progress)
3. Key info (about us, services, pricing optional, booking via WhatsApp/phone/email)  
   **Tech:** Upload API with compression; template injection; real‑time preview; draft persistence

---

## Phase 5: Preview & Publish

**Preview:** Mobile first + desktop toggle; shareable preview link  
**Final details:** Subdomain, custom domain later, billing (first month free → KES 1,200/mo)  
**Publish:** Real‑time status (“~15s remaining”); SSG pipeline; subdomain provisioning; CDN warm

---

## Phase 6: Success & Activation

**Success:** “Congrats Margaret!” + live embed  
**Share:** WhatsApp share, copy link, print QR code  
**Next:** Add photos, customize brand, set custom domain, WhatsApp help  
**Hooks:** Instant gratification; clear next steps; completion % indicator

---

## Success Metrics & Drop‑off Analysis

**Funnel (example):** 1000 → signup 400 → complete 320 → pick template 280 → setup 200 → publish 180 → day‑7 active 135  
**Focus areas:** price/value clarity; guided template choice; robust image upload; publish ETA

---

## Mobile‑Specific Considerations

44px targets, thumb‑zone CTAs, swipe galleries; offline form persistence; compression & minimal JS; reduced motion; clear retries

---

## Technical API Requirements from UX Flow

### Authentication

```ts
POST /api/auth/signup
whatsappNumber: string
businessName: string
businessType: enum
country: string
city: string
languagePreference: string[]
```

### Templates

```ts
GET /api/templates?category={businessType}&lang={locale}
→ Template[] { id, name, description, previewUrl, category }
```

### Site Creation

```ts
POST /api/sites
templateId: string
businessDetails: object
content: object
media: File[]
→ { siteId, subdomain, publishingStatus }
```

> Designed to take a user from “curious” → **published** in under 5 minutes on mobile.
