import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';
import { authenticate } from '@src/auth';
import { FetchMock } from 'jest-fetch-mock';

describe('auth', () => {
  it('if loginStatus === SUCCESS it returns a session token', async () => {
    expect.hasAssertions();
    // Setup
    const token = uuidv4();

    (fetch as unknown as FetchMock).mockResponse(JSON.stringify({
      sessionToken: token,
      loginStatus: 'SUCCESS',
    }));

    const sessionToken = await authenticate({
      username: 'testUser',
      password: 'password',
      appKey: 'appKey',
      certificate: 'test-cert',
      certificateKey: 'test-cert-key',
    });

    expect(sessionToken).toStrictEqual(token);
  });
});
