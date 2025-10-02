'use client';

import { trpc } from './trpc';

export default function Home() {
  const { data, isLoading } = trpc.tenant.getCurrent.useQuery();

  if (isLoading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tenant Dashboard</h1>
      {data ? (
        <div>
          <p>Name: {data.name}</p>
          <p>ID: {data.id}</p>
          <p>Created: {data.created_at}</p>
        </div>
      ) : (
        <p>No tenant found</p>
      )}
    </div>
  );
}
