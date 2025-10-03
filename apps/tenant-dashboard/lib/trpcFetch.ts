export async function trpcCall<TInput, TOut>(path: string, input: TInput): Promise<TOut> {
  const res = await fetch(`/api/trpc/${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    // tRPC fetch adapter expects { "0": { "json": <input> } }
    body: JSON.stringify({ 0: { json: input } }),
  });

  const payload = await res.json().catch(() => null);
  const first = Array.isArray(payload) ? payload[0] : undefined;

  if (!first?.result?.data && first?.error) {
    throw new Error(first.error?.message || 'tRPC error');
  }
  if (!first?.result?.data) {
    throw new Error('Unexpected tRPC response');
  }
  return first.result.data as TOut;
}
