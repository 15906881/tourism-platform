# Enhanced Site Personalization Screen — Phase 1 (Ship‑Ready, v1.0 Locked)

**Route / Screen ID:** `/photos/entry` (aka `photos_entry`)  
**Purpose:** Invite users to add photos or proceed with fast, region‑matched stock photos

---

## Screen Mockup (Mobile 375px)

```
┌─────────────────────────────────────┐
│ [←] Enhance Your Site               │
├─────────────────────────────────────┤
│                                     │
│    📸 Make Your Site Personal       │
│                                     │
│  [Sample lodge photo with overlay]  │
│    "Add your photos to stand out"   │
│                                     │
│  We've added beautiful stock        │
│  photos that match your lodge.      │
│  Want to add your own?              │
│                                     │
│  ┌─────────────────────────────────┐ │
│  │  📷 Add up to 3 photos          │ │
│  │     (optional)                  │ │
│  └─────────────────────────────────┘ │
│  About 0.8–1.4 MB total (estimate)  │
│  Data Saver available               │
│                                     │
│  Preview stock photos ›             │
│                                     │
│  You can always change photos       │
│  later from your dashboard          │
│                                     │
├─────────────────────────────────────┤
│  ┌─────────────────────────────────┐ │
│  │  📱 Continue with stock photos  │ │
│  │     (fastest)                   │ │
│  └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## Analytics Events & Payloads

All events include `view_id` for de‑duplication (unique per route mount).

- `entry_impression` (de‑duped per `view_id`)
- `cta_add_photos_click`
- `cta_stock_preview_click`
- `cta_stock_continue_click`
- `back_tap`
- `stock_preview_impression`
- `stock_mapping_fallback` (with `fallbackReason`: `no_region` | `asset_miss` | `network_error`)

**Example payloads**

```json
{ "event": "entry_impression", "screen": "enhance_personalization", "view_id": "abc123", "businessType": "safari_lodge", "region": "east_africa", "connectionType": "3g", "transport": "cell", "dataSaverEligible": true }
```
```json
{ "event": "cta_add_photos_click", "screen": "enhance_personalization", "view_id": "abc123", "businessType": "safari_lodge", "region": "east_africa", "connectionType": "4g", "dataSaverOn": false }
```
```json
{ "event": "cta_stock_preview_click", "screen": "enhance_personalization", "view_id": "abc123", "businessType": "safari_lodge", "region": "east_africa", "connectionType": "4g", "transport": "cell", "dataSaverEligible": true }
```
```json
{ "event": "cta_stock_continue_click", "screen": "enhance_personalization", "view_id": "abc123", "businessType": "safari_lodge", "region": "east_africa", "connectionType": "wifi", "dataSaverOn": true }
```
```json
{ "event": "back_tap", "screen": "enhance_personalization", "view_id": "abc123" }
```
```json
{ "event": "stock_mapping_fallback", "screen": "enhance_personalization", "view_id": "abc123", "businessType": "safari_lodge", "region": "unknown", "fallbackReason": "no_region", "connectionType": "3g", "transport": "wifi" }
```

---

## Internationalization Strings

```
enhance.title = "Enhance your site"
enhance.h1 = "Make your site personal"
enhance.overlay = "Add your photos to stand out"
enhance.add_photos = "Add up to 3 photos"
enhance.add_photos_optional = "(optional)"
enhance.data_estimate = "About {range} total (estimate)"
enhance.data_saver_available = "Data Saver available"
enhance.preview_stock = "Preview stock photos ›"
enhance.reassure = "You can always change photos later from your dashboard"
enhance.stock_primary = "Continue with stock photos"
enhance.stock_fastest = "(fastest)"
```

---

## Accessibility Implementation

### Concrete markup example
```html
<main aria-labelledby="h1">
  <button class="back" aria-label="Back">←</button>

  <h1 id="h1">Make your site personal</h1>

  <img src="sample.jpg" alt="" role="presentation"
       width="768" height="432" style="aspect-ratio:16/9" />

  <button id="add-photos"
          aria-label="Add up to 3 photos (optional)"
          aria-describedby="data-caption"
          class="touch-target">📷 Add up to 3 photos (optional)</button>

  <p id="data-caption" class="helper" aria-live="polite">
    About 0.8–1.4 MB total (estimate). Data Saver available.
  </p>

  <a class="touch-target" href="/stock" 
     aria-label="Preview stock photos for your region">Preview stock photos <span class="chev">›</span></a>

  <p class="helper">You can always change photos later from your dashboard</p>

  <div class="sticky-cta">
    <button class="primary touch-target"
            aria-label="Continue with stock photos (fastest)">
      📱 Continue with stock photos <span class="sub">(fastest)</span>
    </button>
    <p class="offline-hint">You're offline — we'll switch to stock photos; publishing requires a connection.</p>
  </div>
</main>
```

**Semantics:** “Preview stock photos ›” is `<a>`; CTAs are `<button>`; sample image is decorative (`alt="" role="presentation"`); main landmark is `<main aria-labelledby="h1">`.

**Focus order:** Back → H1 → Add photos → Data caption → Preview link → Reassurance → Sticky CTA

---

## CSS Implementation

```css
.sticky-cta {
  position: sticky; 
  bottom: 0;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  background: #fff; 
  box-shadow: 0 -2px 12px rgba(0,0,0,.06);
}
.touch-target { 
  display: inline-flex;
  align-items: center;
  min-height: 44px; 
}
:dir(rtl) .chev { transform: scaleX(-1); }
.sample-image-container { aspect-ratio: 16/9; width: 100%; }
@media (prefers-reduced-motion: reduce) { .preview-transition { transition: none; } }
.offline-hint { display:none; font-size:0.875rem; color:#666; margin-top:4px; }
body.offline .offline-hint { display:block; }
```

---

## Technical Requirements

### UX & Visual Design
- 44px+ targets, sentence case, RTL chevron flip, truncation handling for 320–360px, subdued helper text, CLS prevention (explicit dimensions), reduced motion, offline hint.

### Error Handling & Fallbacks
- Global default stock set (“Showing recommended photos—change set”)
- Region mapping fallback + banner + analytics
- Localized helper text

### Implementation Details
- Photo upload: **max 3 photos**, **0.8–1.4 MB total (estimate)**
- Data Saver mode
- Region‑matched stock preview
- Post‑setup dashboard management
- Cross‑platform responsive

---

## Pre‑Merge Test Checklist

- `back_tap` fires on header back button
- `entry_impression` de‑duped by `view_id`
- Caption updates announced via `aria-live="polite"` when estimate refines
- Screen reader order: Back → H1 → Add Photos (with caption) → Preview link → reassurance → sticky CTA

**Responsive & RTL**
- 320–360px: helper text wraps, no truncation
- RTL: chevrons flip; focus order preserved

**Analytics**
- `stock_mapping_fallback` emits with `fallbackReason`
- Events use Network Info API values for `connectionType`

**Interaction & Performance**
- All buttons/links ≥44px, keyboard focus ring visible
- Stock preview opens region‑matched; fallback shows “Change set”
- Sample image explicit dimensions (no CLS)
- Sticky CTA clears iOS safe area insets (with `constant()` + `env()` fallbacks)
- Offline state managed via `online/offline` listeners
- Data Saver hint only when eligible
- Stock hero prefetched (`as="image"`)
- Add Photos modal: focus trap + `aria-controls`
- Test IDs: `data-testid="add-photos-button|stock-preview-link|stock-continue-button"`

**Focus Management**
- Logical progression; screen readers announce all interactive elements
- Stock mapping failure triggers banner + analytics

**Status:** ✅ FINAL DELIVERABLE (v1.0 LOCKED) — Ready for development handoff  
**Suggested Commit:** `feat(personalization): add Phase 1 "Enhance Your Site" screen (v1.0 locked, analytics + a11y complete)`
