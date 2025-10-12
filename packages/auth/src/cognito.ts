import jwksClient from 'jwks-rsa';
import jwt from 'jsonwebtoken';

const REGION = process.env.COGNITO_REGION || 'us-east-1';
const USER_POOL_ID = process.env.COGNITO_USER_POOL_ID;
const JWKS_URL = process.env.COGNITO_JWKS_URL;

if (!USER_POOL_ID || !JWKS_URL) {
  throw new Error('Missing required Cognito environment variables');
}

const client = jwksClient({
  jwksUri: JWKS_URL,
  cache: true,
  cacheMaxAge: 86400000,
});

function getKey(header: any, callback: any) {
  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      callback(err);
      return;
    }
    const signingKey = key?.getPublicKey();
    callback(null, signingKey);
  });
}

export async function verifyCognitoToken(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      getKey,
      {
        issuer: `https://cognito-idp.${REGION}.amazonaws.com/${USER_POOL_ID}`,
        algorithms: ['RS256'],
      },
      (err, decoded) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(decoded);
      }
    );
  });
}
