import { TRPCError } from '@trpc/server'
import type { Context } from './context'

export enum Role {
  ADMIN = 'admin',
  MANAGER = 'manager', 
  MEMBER = 'member',
  VIEWER = 'viewer',
}

export function requireRole(ctx: Context, requiredRoles: string[]) {
  if (!ctx.role || !requiredRoles.includes(ctx.role)) {
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: `Required role: ${requiredRoles.join(' or ')}`,
    })
  }
}

export function isAdmin(ctx: Context): boolean {
  return ctx.role === 'admin'
}
