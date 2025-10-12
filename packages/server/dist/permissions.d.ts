import type { Context } from './context';
export declare enum Role {
    ADMIN = "admin",
    MANAGER = "manager",
    MEMBER = "member",
    VIEWER = "viewer"
}
export declare function requireRole(ctx: Context, requiredRoles: string[]): void;
export declare function isAdmin(ctx: Context): boolean;
