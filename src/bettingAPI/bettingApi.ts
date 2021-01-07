import {
  CancelExecutionReport,
  CancelOrderParams,
  ClearedOrderSummaryReport,
  CompetitionResult,
  CountryCodeResult,
  CurrentOrderSummary,
  EventResult,
  EventTypeResult,
  ListClearedOrdersParams,
  ListCompetitionsParams,
  ListCountriesParams,
  ListCurrentOrdersParams,
  ListEventsParams,
  ListEventTypesParams,
  ListMarketBookParams,
  ListMarketCatalogueParams,
  ListMarketProfitAndLoss,
  ListMarketTypesParams,
  ListRunnerBookParams,
  ListTimeRangesParams,
  MarketBook,
  MarketCatalogue,
  MarketFilter,
  MarketProfitAndLoss,
  MarketTypeResult,
  PlaceExecutionReport,
  ReplaceExecutionReport,
  ReplaceOrdersParams,
  PlaceOrdersParams,
  TimeRangeResult,
  VenueResult,
} from './betting';

export type Operations =
  'cancelOrders'
  | 'listVenues'
  | 'listClearedOrders'
  | 'listCompetitions'
  | 'listCountries'
  | 'listCurrentOrders'
  | 'listEvents'
  | 'listEventTypes'
  | 'listMarketBook'
  | 'listMarketCatalogue'
  | 'listMarketProfitAndLoss'
  | 'listMarketTypes'
  | 'listRunnerBook'
  | 'listTimeRanges'
  | 'replaceOrders'
  | 'placeOrders'

export type BettingAPIRequestParams<T extends Operations> =
  T extends 'cancelOrders' ? CancelOrderParams :
  T extends 'listClearedOrders' ? ListClearedOrdersParams :
  T extends 'listVenues' ? MarketFilter :
  T extends 'listCompetitions' ? ListCompetitionsParams :
  T extends 'listCountries' ? ListCountriesParams :
  T extends 'listCurrentOrders' ? ListCurrentOrdersParams :
  T extends 'listEvents' ? ListEventsParams :
  T extends 'listEventTypes' ? ListEventTypesParams :
  T extends 'listMarketBook' ? ListMarketBookParams :
  T extends 'listMarketCatalogue' ? ListMarketCatalogueParams :
  T extends 'listMarketProfitAndLoss' ? ListMarketProfitAndLoss :
  T extends 'listMarketTypes' ? ListMarketTypesParams :
  T extends 'listRunnerBook' ? ListRunnerBookParams :
  T extends 'listTimeRanges' ? ListTimeRangesParams :
  T extends 'replaceOrders' ? ReplaceOrdersParams :
  T extends 'placeOrders' ? PlaceOrdersParams :
    never

export type BettingAPIResponse<T extends Operations> =
  T extends 'cancelOrders' ? CancelExecutionReport :
  T extends 'listVenues' ? VenueResult[] :
  T extends 'listClearedOrders' ? ClearedOrderSummaryReport :
  T extends 'listCompetitions' ? CompetitionResult[] :
  T extends 'listCountries' ? CountryCodeResult[] :
  T extends 'listCurrentOrders' ? CurrentOrderSummary :
  T extends 'listEvents' ? EventResult[] :
  T extends 'listEventTypes' ? EventTypeResult[] :
  T extends 'listMarketBook' ? MarketBook[] :
  T extends 'listMarketCatalogue' ? MarketCatalogue[] :
  T extends 'listMarketProfitAndLoss' ? MarketProfitAndLoss[] :
  T extends 'listMarketTypes' ? MarketTypeResult[] :
  T extends 'listRunnerBook' ? MarketBook[] :
  T extends 'listTimeRanges' ? TimeRangeResult[] :
  T extends 'replaceOrders' ? ReplaceExecutionReport :
  T extends 'placeOrders' ? PlaceExecutionReport :
    never
