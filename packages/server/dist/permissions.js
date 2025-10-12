import { TRPCError } from '@trpc/server';
export var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["MANAGER"] = "manager";
    Role["MEMBER"] = "member";
    Role["VIEWER"] = "viewer";
})(Role || (Role = {}));
export function requireRole(ctx, requiredRoles) {
    if (!ctx.role || !requiredRoles.includes(ctx.role)) {
        throw new TRPCError({
            code: 'FORBIDDEN',
            message: `Required role: ${requiredRoles.join(' or ')}`,
        });
    }
}
export function isAdmin(ctx) {
    return ctx.role === 'admin';
}
