import type { TokenPayload } from './token';
export interface Session {
    userId: string;
    email: string;
    tenantId: string;
    roles: string[];
    createdAt: Date;
    expiresAt: Date;
}
export declare function createSession(payload: TokenPayload): Session;
//# sourceMappingURL=session.d.ts.map