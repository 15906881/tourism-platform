import { router, protectedProcedure } from '../trpc';

export const subscriptionsRouter = router({
  // No Subscription model yet — callers should handle null.
  current: protectedProcedure.query(async () => {
    return null;
  }),
});
