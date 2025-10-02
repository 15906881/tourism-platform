import { router } from './trpc';
import { tenantRouter } from './routers/tenant';
import { listingsRouter } from './routers/listings';
import { leadsRouter } from './routers/leads';
import { subscriptionsRouter } from './routers/subscriptions';

export const appRouter = router({
  tenant: tenantRouter,
  listings: listingsRouter,
  leads: leadsRouter,
  subscriptions: subscriptionsRouter,
});

export type AppRouter = typeof appRouter;
