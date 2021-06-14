import https from 'https';
import fetch from 'node-fetch';
import { URLSearchParams } from 'url';
import { AuthParams, LOGIN_ERROR_STATUS } from './auth';
import { AUTH_RESPONSES } from './constants';

const AUTH_URL = 'https://identitysso-cert.betfair.com/api/certlogin';

export const authenticate = async ({
  username,
  password,
  appKey,
  certificate,
  certificateKey,
  certificatePassword,
}: AuthParams): Promise<string> => {
  const response = await fetch(AUTH_URL, {
    method: 'POST',
    headers: {
      'X-Application': appKey,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    agent: new https.Agent({
      cert: certificate,
      key: certificateKey,
      passphrase: certificatePassword,
      rejectUnauthorized: true,
      keepAlive: false,
    }),
    body: new URLSearchParams([
      ['username', username],
      ['password', password],
    ]),
  });

  if (!response.ok) throw Error(`${response.status}: ${response.statusText}`);

  const { sessionToken, loginStatus } = await response.json();

  if (loginStatus === 'SUCCESS') return sessionToken;

  throw Error(JSON.stringify({
    code: loginStatus,
    message: AUTH_RESPONSES[(loginStatus as LOGIN_ERROR_STATUS)],
  }));
};
