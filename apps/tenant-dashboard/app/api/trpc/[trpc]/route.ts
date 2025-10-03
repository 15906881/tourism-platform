import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import type { AppRouter } from '@weblynk/server'

// Import only what we need at runtime - avoid importing the whole server package
const handler = async (req: Request) => {
  const { appRouter, createContext } = await import('@weblynk/server')
  
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
    onError:
      process.env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`)
          }
        : undefined,
  })
}

export { handler as GET, handler as POST }
