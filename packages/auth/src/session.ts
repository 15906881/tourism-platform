import type { TokenPayload } from './token';

export interface Session {
  userId: string;
  email: string;
  tenantId: string;
  roles: string[];
  createdAt: Date;
  expiresAt: Date;
}

export function createSession(payload: TokenPayload): Session {
  const now = new Date();
  const maxAge = parseInt(process.env.SESSION_MAX_AGE || '86400') * 1000;
  return {
    userId: payload.sub,
    email: payload.email,
    tenantId: payload.tenantId,
    roles: payload.roles,
    createdAt: now,
    expiresAt: new Date(now.getTime() + maxAge),
  };
}
