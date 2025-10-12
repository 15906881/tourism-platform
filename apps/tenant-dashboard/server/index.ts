import { router } from './trpc';
import { onboardingRouter } from './routers/onboarding';

export const appRouter = router({
  onboarding: onboardingRouter,
});

export type AppRouter = typeof appRouter;
