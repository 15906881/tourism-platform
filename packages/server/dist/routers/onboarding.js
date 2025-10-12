import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "../trpc";
const mask = (id) => (id && id.length >= 4 ? `${id.slice(0, 4)}…${id.slice(-4)}` : "(none)");
function requireTenant(ctx) {
    if (!ctx.tenantId) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Missing tenant" });
    }
    return ctx.tenantId;
}
// Local-dev helper ONLY used by registerDev to mint a fake tenant id
function stubTenant() {
    return "stub-tenant-0001";
}
export const onboardingRouter = router({
    // Step 1: dev registration bootstraps the onboarding cookie
    registerDev: publicProcedure
        .input(z.object({ email: z.string().email(), company: z.string().min(1) }).strict())
        .mutation(({ input }) => {
        // In a real backend, create tenant + user here and return its ID.
        const tenantId = stubTenant();
        console.log("[onboarding:stub] registerDev ->", {
            email: input.email,
            company: input.company,
            tenantId: mask(tenantId),
        });
        return { tenantId };
    }),
    // Step 2+ must have tenant (gate)
    setVertical: publicProcedure
        .input(z.object({ vertical: z.string() }).strict())
        .mutation(({ ctx, input }) => {
        const tenantId = requireTenant(ctx);
        console.log("[onboarding:stub] setVertical ->", {
            tenantId: mask(tenantId),
            vertical: input.vertical,
        });
        return { ok: true, tenantId };
    }),
    setTemplate: publicProcedure
        .input(z.object({ template: z.string() }).strict())
        .mutation(({ ctx, input }) => {
        const tenantId = requireTenant(ctx);
        console.log("[onboarding:stub] setTemplate ->", {
            tenantId: mask(tenantId),
            template: input.template,
        });
        return { ok: true, tenantId };
    }),
    setTheme: publicProcedure
        .input(z.object({ themeId: z.string() }).strict())
        .mutation(({ ctx, input }) => {
        const tenantId = requireTenant(ctx);
        console.log("[onboarding:stub] setTheme ->", {
            tenantId: mask(tenantId),
            themeId: input.themeId,
        });
        return { ok: true, tenantId };
    }),
    startTrial: publicProcedure
        .input(z.object({ planId: z.string() }).strict())
        .mutation(({ ctx, input }) => {
        const tenantId = requireTenant(ctx);
        console.log("[onboarding:stub] startTrial ->", {
            tenantId: mask(tenantId),
            planId: input.planId,
        });
        return { ok: true, tenantId };
    }),
    finalize: publicProcedure
        .input(z.object({ slug: z.string().min(3) }).strict())
        .mutation(({ ctx, input }) => {
        const tenantId = requireTenant(ctx);
        const siteUrl = `https://${input.slug}.example.test`;
        console.log("[onboarding:stub] finalize ->", {
            tenantId: mask(tenantId),
            slug: input.slug,
            siteUrl,
        });
        return { ok: true, tenantId, siteUrl };
    }),
});
