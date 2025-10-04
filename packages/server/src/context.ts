import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { prisma } from '@weblynk/db';
import { verifyCognitoToken } from '@weblynk/auth';
import { randomUUID } from 'crypto';

type MembershipContext =
  | {
      tenant_id: string;
      role: string;
      account_id: string;
    }
  | null;

export async function createContext({ req }: FetchCreateContextFnOptions) {
  const requestId = randomUUID();
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  let accountId: string | null = null;
  let tenantId: string | null = null;
  let userId: string | null = null;
  let role: string | null = null;
  let membership: MembershipContext = null;

  if (token) {
    try {
      const payload = await verifyCognitoToken(token);

      const account = await prisma.accounts.findFirst({
        where: { email: payload.email },
        include: {
          memberships: {
            include: { tenants: true },
          },
        },
      });

      const firstMembership = account?.memberships?.[0];
      if (account && firstMembership) {
        membership = {
          tenant_id: firstMembership.tenant_id,
          role: firstMembership.role,
          account_id: firstMembership.account_id,
        };

        accountId = account.id;
        tenantId = membership.tenant_id;
        role = membership.role;

        const user = await prisma.user.findFirst({
          where: { email: payload.email, tenant_id: tenantId },
        });
        userId = user?.id ?? null;
      }
    } catch (err) {
      console.warn('Invalid token:', err);
    }
  }

  return { db: prisma, accountId, tenantId, userId, role, membership, requestId };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
