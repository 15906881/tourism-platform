import { initTRPC } from '@trpc/server';
const t = initTRPC.context().create();
// Keep both names to satisfy old & new imports
export const router = t.router; // legacy alias
export const createTRPCRouter = t.router; // preferred
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure; // add auth middleware later if needed
