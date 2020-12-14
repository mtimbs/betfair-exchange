# Betfair exchange API

Wrapper around [Betfair exchange API](https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni#APIOverview-ExchangeAPIProducts) with TypeScript type definitions and a simple API for interacting with endpoints.

## Authentication
You need to set up a valid API key and register it with your Betfair account in order to use the exchange API. This repo assumes the following environment variables exist on `process.env`

- BETFAIR_APP_KEY
- BETFAIR_CERTIFICATE
- BETFAIR_CERTIFICATE_PASSPHRASE (OPTIONAL)
- BETFAIR_SECRET_KEY
- BETFAIR_USERNAME
- BETFAIR_PASSWORD

You can find instructions on how to set up SSL certificates [here]()
