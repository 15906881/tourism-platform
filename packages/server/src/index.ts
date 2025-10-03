import { router } from './trpc'
import { systemRouter } from './routers/system'
import { tenantsRouter } from './routers/tenants'
import { listingsRouter } from './routers/listings'
import { leadsRouter } from './routers/leads'
import { mediaRouter } from './routers/media'
import { sitesRouter } from './routers/sites'
import { pagesRouter } from './routers/pages'

export const appRouter = router({
  system: systemRouter,
  tenants: tenantsRouter,
  listings: listingsRouter,
  leads: leadsRouter,
  media: mediaRouter,
  sites: sitesRouter,
  pages: pagesRouter,
})

export type AppRouter = typeof appRouter
export { createContext } from './context'
export type { Context } from './context'
