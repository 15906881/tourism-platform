export type MaybeId = { id?: string; _id?: string };

export function getId<T extends MaybeId>(x: T): string {
  // prefer `id`, fall back to `_id`
  const v = x.id ?? (x as any)._id;
  if (!v) throw new Error('Missing id/_id');
  return v;
}
