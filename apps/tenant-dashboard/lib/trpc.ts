import { createTRPCReact } from '@trpc/react-query'
import { httpBatchLink } from '@trpc/client'
import type { AppRouter } from '@weblynk/server'

export const trpc = createTRPCReact<AppRouter>()

export function getTRPCClient(token?: string) {
  return trpc.createClient({
    links: [
      httpBatchLink({
        url: '/api/trpc',
        headers: token ? { authorization: `Bearer ${token}` } : undefined,
      }),
    ],
  })
}
