import type { TokenPayload } from './token';
export declare enum Role {
    ADMIN = "ADMIN",
    PROJECT_MANAGER = "PROJECT_MANAGER",
    MEMBER = "MEMBER",
    VIEWER = "VIEWER"
}
export declare function hasRole(payload: TokenPayload, role: Role): boolean;
export declare function hasAnyRole(payload: TokenPayload, roles: Role[]): boolean;
export declare function isAdmin(payload: TokenPayload): boolean;
//# sourceMappingURL=guards.d.ts.map