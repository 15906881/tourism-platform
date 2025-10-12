import { z } from 'zod';
export declare const TokenPayloadSchema: z.ZodObject<{
    sub: z.ZodString;
    email: z.ZodString;
    tenantId: z.ZodString;
    roles: z.ZodArray<z.ZodString, "many">;
    iat: z.ZodOptional<z.ZodNumber>;
    exp: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    sub: string;
    email: string;
    tenantId: string;
    roles: string[];
    iat?: number | undefined;
    exp?: number | undefined;
}, {
    sub: string;
    email: string;
    tenantId: string;
    roles: string[];
    iat?: number | undefined;
    exp?: number | undefined;
}>;
export type TokenPayload = z.infer<typeof TokenPayloadSchema>;
export declare function signToken(payload: Omit<TokenPayload, 'iat' | 'exp'>): Promise<string>;
export declare function verifyToken(token: string): Promise<TokenPayload>;
//# sourceMappingURL=token.d.ts.map