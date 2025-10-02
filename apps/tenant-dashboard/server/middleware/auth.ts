import { TRPCError } from '@trpc/server';
import { Context } from '../context';

// Placeholder JWT verify - replace with actual Cognito verification
async function verifyJWT(token: string) {
  // TODO: Implement actual Cognito JWT verification
  // For now, return mock data to unblock development
  return {
    tenantId: 'tenant-123',
    userId: 'user-456',
    role: 'tenant_user',
  };
}

export async function requireAuth(ctx: Context) {
  const authHeader = ctx.req?.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Missing or invalid token' });
  }

  const token = authHeader.substring(7);
  
  try {
    const payload = await verifyJWT(token);
    return {
      ...ctx,
      tenantId: payload.tenantId,
      userId: payload.userId,
      role: payload.role,
    };
  } catch (error) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid token' });
  }
}
