import fs from 'fs';
import https from 'https';
import fetch from 'node-fetch';
import { URLSearchParams } from 'url';
import { LOGIN_ERROR_STATUS } from './auth';
import { AUTH_RESPONSES } from './constants';

const {
  BETFAIR_APP_KEY = '',
  BETFAIR_CERTIFICATE_PATH = '',
  BETFAIR_KEY_PATH = '',
  BETFAIR_CERTIFICATE_PASSPHRASE = '',
  BETFAIR_USERNAME = '',
  BETFAIR_PASSWORD = '',
} = process.env;

const AUTH_URL = 'https://identitysso-cert.betfair.com/api/certlogin';

const CERTIFICATE_FROM_FILESYSTEM = (() => {
  try {
    return fs.readFileSync(BETFAIR_CERTIFICATE_PATH).toString();
  } catch (error) {
    return '';
  }
})();

const KEY_FROM_FILESYSTEM = (() => {
  try {
    return fs.readFileSync(BETFAIR_KEY_PATH).toString();
  } catch (error) {
    return '';
  }
})();

// If you do not want to store certificates and keys on the filesystem you may pass them explicitly to the authenticate method
export const authenticate = async ({ certificate, key }: {certificate?: string, key?: string} = {}): Promise<string> => {
  const response = await fetch(AUTH_URL, {
    method: 'POST',
    headers: {
      'X-Application': BETFAIR_APP_KEY,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    agent: new https.Agent({
      cert: certificate || CERTIFICATE_FROM_FILESYSTEM,
      key: key || KEY_FROM_FILESYSTEM,
      passphrase: BETFAIR_CERTIFICATE_PASSPHRASE,
      rejectUnauthorized: true,
      keepAlive: false,
    }),
    body: new URLSearchParams([
      ['username', BETFAIR_USERNAME],
      ['password', BETFAIR_PASSWORD],
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
