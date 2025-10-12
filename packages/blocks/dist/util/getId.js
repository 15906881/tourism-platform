export function getId(x) {
    // prefer `id`, fall back to `_id`
    const v = x.id ?? x._id;
    if (!v)
        throw new Error('Missing id/_id');
    return v;
}
//# sourceMappingURL=getId.js.map