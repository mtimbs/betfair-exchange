const fetch = require('jest-fetch-mock');
jest.setMock('node-fetch', fetch)


const env = {
  BETFAIR_CERTIFICATE_PASSPHRASE: '',
  BETFAIR_CERTIFICATE_PATH: '',
  BETFAIR_KEY_PATH: '',
  BETFAIR_APP_KEY: '',
  BETFAIR_USERNAME: '',
  BETFAIR_PASSWORD: '',
};

process.env = {
  ...process.env,
  ...env,
};
