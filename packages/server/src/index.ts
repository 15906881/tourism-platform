// packages/server/src/index.ts
export * from "./context";
export { router, publicProcedure } from "./trpc";

// Routers
import { router } from "./trpc";
import { onboardingRouter } from "./routers/onboarding";
import { systemRouter } from "./routers/system";
import { leadsRouter } from "./routers/leads"; // Add this since it exists

export const appRouter = router({
  system: systemRouter,
  onboarding: onboardingRouter,
  leads: leadsRouter, // Add this
});

export type AppRouter = typeof appRouter;