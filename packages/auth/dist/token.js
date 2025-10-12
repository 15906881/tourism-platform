import jwt from 'jsonwebtoken';
import { z } from 'zod';
const JWT_SECRET = process.env.JWT_SECRET || 'development-secret-change-in-production';
const SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE || '86400');
export const TokenPayloadSchema = z.object({
    sub: z.string(),
    email: z.string().email(),
    tenantId: z.string(),
    roles: z.array(z.string()),
    iat: z.number().optional(),
    exp: z.number().optional(),
});
export async function signToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, JWT_SECRET, { expiresIn: SESSION_MAX_AGE }, (err, token) => {
            if (err || !token)
                reject(err || new Error('Failed to sign token'));
            else
                resolve(token);
        });
    });
}
export async function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err)
                reject(err);
            else {
                try {
                    resolve(TokenPayloadSchema.parse(decoded));
                }
                catch (e) {
                    reject(e);
                }
            }
        });
    });
}
//# sourceMappingURL=token.js.map