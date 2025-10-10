export async function trpcCall<TInput, TOut>(path: string, input: TInput): Promise<TOut> {
  const res = await fetch(`/api/trpc/${path}?batch=1`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    // Batch body: array of { json: ... }
    body: JSON.stringify([{ json: input }]),
  });

  const payload = await res.json().catch(() => null);
  const first = Array.isArray(payload) ? payload[0] : undefined;

  if (first?.error) throw new Error(first.error?.message || 'tRPC error');
  if (!first?.result?.data) throw new Error('No tenant ID returned');

  return first.result.data as TOut;
}
