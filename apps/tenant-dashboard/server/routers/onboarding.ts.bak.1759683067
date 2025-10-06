import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

type Step = 'register' | 'vertical' | 'template' | 'theme' | 'trial' | 'finalized';
type Session = {
  tenantId: string;
  email?: string;
  company?: string;
  vertical?: string;
  template?: string;
  theme?: string;
  planId?: string;
  slug?: string;
  step: Step;
};

// simple in-memory store for dev
const memory = new Map<string, Session>();

export const onboardingRouter = router({
  registerDev: publicProcedure
    .input(z.object({ email: z.string().email(), company: z.string().min(1) }))
    .mutation(({ input }) => {
      const tenantId = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
      memory.set(tenantId, { tenantId, email: input.email, company: input.company, step: 'register' });
      return { tenantId };
    }),

  // helpers we’ll use next steps
  setVertical: publicProcedure
    .input(z.object({ tenantId: z.string(), vertical: z.string().min(1) }))
    .mutation(({ input }) => {
      const s = memory.get(input.tenantId); if (!s) throw new Error('session not found');
      s.vertical = input.vertical; s.step = 'vertical';
      return { ok: true };
    }),

  setTemplate: publicProcedure
    .input(z.object({ tenantId: z.string(), template: z.string().min(1) }))
    .mutation(({ input }) => {
      const s = memory.get(input.tenantId); if (!s) throw new Error('session not found');
      s.template = input.template; s.step = 'template';
      return { ok: true };
    }),

  setTheme: publicProcedure
    .input(z.object({ tenantId: z.string(), theme: z.string().min(1) }))
    .mutation(({ input }) => {
      const s = memory.get(input.tenantId); if (!s) throw new Error('session not found');
      s.theme = input.theme; s.step = 'theme';
      return { ok: true };
    }),

  startTrial: publicProcedure
    .input(z.object({ tenantId: z.string(), planId: z.string().min(1) }))
    .mutation(({ input }) => {
      const s = memory.get(input.tenantId); if (!s) throw new Error('session not found');
      s.planId = input.planId; s.step = 'trial';
      return { ok: true };
    }),

  finalize: publicProcedure
    .input(z.object({ tenantId: z.string(), slug: z.string().min(3) }))
    .mutation(({ input }) => {
      const s = memory.get(input.tenantId); if (!s) throw new Error('session not found');
      s.slug = input.slug; s.step = 'finalized';
      return { ok: true, siteUrl: `https://${input.slug}.weblynk.app` };
    }),
});
