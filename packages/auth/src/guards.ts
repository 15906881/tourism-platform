import { TokenPayload } from './token'

export enum Role {
  ADMIN = 'ADMIN',
  PROJECT_MANAGER = 'PROJECT_MANAGER',
  MEMBER = 'MEMBER',
  VIEWER = 'VIEWER',
}

export function hasRole(payload: TokenPayload, role: Role): boolean {
  return payload.roles.includes(role)
}

export function hasAnyRole(payload: TokenPayload, roles: Role[]): boolean {
  return roles.some(role => payload.roles.includes(role))
}

export function isAdmin(payload: TokenPayload): boolean {
  return hasRole(payload, Role.ADMIN)
}
