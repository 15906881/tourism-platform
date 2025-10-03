'use client'

import { trpc } from '../../lib/trpc'

export default function TestTRPCPage() {
  const healthQuery = trpc.system.health.useQuery()
  const versionQuery = trpc.system.version.useQuery()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">tRPC Client Test</h1>
      
      <div className="border p-4 rounded">
        <h2 className="font-bold mb-2">System Health</h2>
        {healthQuery.isLoading && <p>Loading...</p>}
        {healthQuery.error && <p className="text-red-500">Error: {healthQuery.error.message}</p>}
        {healthQuery.data && <pre>{JSON.stringify(healthQuery.data, null, 2)}</pre>}
      </div>

      <div className="border p-4 rounded">
        <h2 className="font-bold mb-2">System Version</h2>
        {versionQuery.isLoading && <p>Loading...</p>}
        {versionQuery.error && <p className="text-red-500">Error: {versionQuery.error.message}</p>}
        {versionQuery.data && <pre>{JSON.stringify(versionQuery.data, null, 2)}</pre>}
      </div>
    </div>
  )
}
