# @weblynk/ui

## 0.1.0

### Minor Changes

- c45196b: Stabilize ESM output and enhance component API

  **Breaking changes for deep imports:**

  - Removed directory imports; use explicit barrel exports only
  - All internal paths now use `.js` extensions for proper ESM resolution

  **New features:**

  - Added `Badge` size variants (`sm | md`) with default export
  - Added `'use client'` directives to client components (ErrorBoundary, DataTable) for Next.js App Router compatibility

  **Improvements:**

  - Type hygiene improvements for TypeScript 5.x
  - Cleaned up import paths and export structure
  - Fixed SSR build errors in Next.js 14
