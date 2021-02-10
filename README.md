# Betfair exchange API

Wrapper around [Betfair exchange API](https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni#APIOverview-ExchangeAPIProducts) with TypeScript type definitions and a simple API for interacting with endpoints.

## Authentication
You need to set up a valid API key and register it with your Betfair Account in order to use the exchange API.

When consuming this library you will need to call the `authenticate` method. This method takes two optional parameters (Certificate & Key) which allow explicit passing of SSL certificates and keys. Otherwise, you can store the keys on your server and define the paths to them under the environment variables BETFAIR_CERTIFICATE_PATH and BETFAIR_KEY_PATH. The `authenticate` method will load the keys from your filesystem if no arguments are passed to it.

- BETFAIR_APP_KEY 
- BETFAIR_CERTIFICATE_PATH (Optional)
- BETFAIR_KEY_PATH (Optional)
- BETFAIR_CERTIFICATE_PASSPHRASE (Optional)
- BETFAIR_USERNAME
- BETFAIR_PASSWORD

You can find instructions on how to set up SSL certificates [here]()
