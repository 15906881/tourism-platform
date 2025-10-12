export async function createContext() {
    const backend = (process.env.ONBOARDING_BACKEND || 'stub').toLowerCase();
    // Lazy-load Prisma only if we ever flip backend=db.
    let db = null;
    if (backend === 'db') {
        try {
            const mod = await import('@weblynk/db/generated/prisma');
            db = new mod.PrismaClient();
        }
        catch (e) {
            console.error('[context] Failed to import Prisma client:', e?.message || e);
        }
    }
    // Provide optional identity fields expected by routers/permissions.
    // In stub mode we just use safe placeholders.
    const ctx = {
        db,
        tenantId: process.env.DEBUG_TENANT_ID || 'stub-tenant-0001',
        role: process.env.DEBUG_ROLE || 'admin',
    };
    if (process.env.DEBUG_ONBOARDING === '1') {
        const url = process.env.DATABASE_URL || '<unset>';
        const masked = url.replace(/:\/\/([^:@]+):([^@]*)@/, '://$1:***@');
        console.log('[context] DEBUG DATABASE_URL =', masked, '| BACKEND =', backend, '| tenantId =', ctx.tenantId, '| role =', ctx.role);
    }
    return ctx;
}
