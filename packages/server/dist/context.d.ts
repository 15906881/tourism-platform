import type { inferAsyncReturnType } from '@trpc/server';
export declare function createContext(): Promise<{
    db: any;
    tenantId: string;
    role: "admin" | "user";
}>;
export type Context = inferAsyncReturnType<typeof createContext>;
