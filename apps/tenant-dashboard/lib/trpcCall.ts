// Lightweight wrapper to call tRPC routes via the Next.js fetch adapter.
// Usage (client components):
//   await trpcCall('onboarding.setTemplate', { template: 'clean' });

type TrpcResult<T> = { result?: { data?: T } ; error?: { message?: string } };

export async function trpcCall<TReq extends object = Record<string, never>, TRes = unknown>(
  path: string,
  body?: TReq
): Promise<TRes> {
  const res = await fetch(`/api/trpc/${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    // IMPORTANT: our server expects the raw input object (not { input: ... })
    body: JSON.stringify(body ?? {}),
  });

  // Network/HTTP error handling
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`tRPC HTTP ${res.status}: ${text || res.statusText}`);
  }

  const json = (await res.json()) as TrpcResult<TRes>;

  // tRPC error envelope handling
  if (json.error) {
    throw new Error(json.error.message || 'tRPC error');
  }

  if (!json.result || typeof json.result.data === 'undefined') {
    throw new Error('tRPC: missing result.data');
  }

  return json.result.data as TRes;
}
