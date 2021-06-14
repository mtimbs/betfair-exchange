# Betfair exchange API

Wrapper around [Betfair exchange API](https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni#APIOverview-ExchangeAPIProducts) with TypeScript type definitions and a simple API for interacting with endpoints.

## 🔐 Authentication
When consuming this library you will need to call the `authenticate` method. This method requires all information to authenticate your account and then sets auth headers on all API wrappers.

You will need the following information to authenticate the API
- Betfair Username
- Betfair Password
- [Betfair Application Key](https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni/Application+Keys#ApplicationKeys-HowtoCreateAnApplicationKey)
- [Self Signed Certificate](https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni/Non-Interactive+%28bot%29+login#NonInteractive(bot)login-CreatingaSelfSignedCertificate)
- [Certificate Key](https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni/Non-Interactive+%28bot%29+login#NonInteractive(bot)login-CreatingaSelfSignedCertificate)
- (Optional) [Certificate Key Passphrase](https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni/Non-Interactive+%28bot%29+login#NonInteractive(bot)login-LinkingtheCertificatetoYourBetfairAccount)

```typescript
import { authenticate } from 'betfair-api-ts';

const main = async() => {
  await authenticate({
    username: '',             //Betfair Username
    password: '',             // Betfair password
    appKey: '',               // Betfair Application Key
    certificate: '',          // Self Signed Certificate
    certificateKey: '',       // Self Signed Certificate Key
    certificatePassword: '',  // Optional passphrase for Certificate Key
  })
  
  // You are now free to interact with the API and all requests will be authenticated automatically.
}
```

Note: Current version does not support refreshing authentication tokens. This will need to be handled manually.
