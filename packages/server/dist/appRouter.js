import { router } from './trpc';
import { systemRouter } from './routers/system';
import { onboardingRouter } from './routers/onboarding';
export const appRouter = router({
    system: systemRouter,
    onboarding: onboardingRouter,
});
