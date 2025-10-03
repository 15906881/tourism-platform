import { JwksClient } from 'jwks-rsa'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

const CognitoPayloadSchema = z.object({
  sub: z.string(),
  email: z.string().email(),
  'cognito:username': z.string().optional(),
  'custom:tenantId': z.string().optional(),
  exp: z.number(),
  iat: z.number(),
  iss: z.string(),
  token_use: z.string(),
})

export type CognitoPayload = z.infer<typeof CognitoPayloadSchema>

const COGNITO_JWKS_URL = process.env.COGNITO_JWKS_URL
const COGNITO_USER_POOL_ID = process.env.COGNITO_USER_POOL_ID
const COGNITO_REGION = process.env.COGNITO_REGION || 'us-east-1'

let jwksClient: JwksClient | null = null

function getJwksClient(): JwksClient {
  if (!jwksClient && COGNITO_JWKS_URL) {
    jwksClient = new JwksClient({
      jwksUri: COGNITO_JWKS_URL,
      cache: true,
      cacheMaxAge: 600000, // 10 minutes
    })
  }
  return jwksClient!
}

function getSigningKey(kid: string): Promise<string> {
  return new Promise((resolve, reject) => {
    getJwksClient().getSigningKey(kid, (err, key) => {
      if (err) reject(err)
      else resolve(key!.getPublicKey())
    })
  })
}

export async function verifyCognitoToken(token: string): Promise<CognitoPayload> {
  // Development mode: just decode
  if (process.env.NODE_ENV === 'development' && !COGNITO_JWKS_URL) {
    console.warn('⚠️  Development mode: Cognito verification disabled')
    const decoded = jwt.decode(token)
    return CognitoPayloadSchema.parse(decoded)
  }

  // Production mode: full verification
  if (!COGNITO_JWKS_URL || !COGNITO_USER_POOL_ID) {
    throw new Error('Missing COGNITO_JWKS_URL or COGNITO_USER_POOL_ID')
  }

  // Decode header to get kid
  const decodedHeader = jwt.decode(token, { complete: true })
  if (!decodedHeader || typeof decodedHeader === 'string') {
    throw new Error('Invalid token format')
  }

  const kid = decodedHeader.header.kid
  if (!kid) {
    throw new Error('Token missing kid in header')
  }

  // Get signing key
  const signingKey = await getSigningKey(kid)

  // Verify token
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      signingKey,
      {
        issuer: `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}`,
        algorithms: ['RS256'],
      },
      (err, decoded) => {
        if (err) {
          reject(new Error('Token verification failed: ' + err.message))
        } else {
          try {
            const payload = CognitoPayloadSchema.parse(decoded)
            resolve(payload)
          } catch (e) {
            reject(new Error('Invalid token payload'))
          }
        }
      }
    )
  })
}
