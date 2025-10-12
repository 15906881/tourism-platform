import { router } from './trpc';
import { systemRouter } from './routers/system';
import { leadsRouter } from './routers/leads';
import { subscriptionsRouter } from './routers/subscriptions';

export const appRouter = router({
  system: systemRouter,
  leads: leadsRouter,
  subscriptions: subscriptionsRouter,
});

export type AppRouter = typeof appRouter;
