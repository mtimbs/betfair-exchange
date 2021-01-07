import fetch from 'node-fetch';
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
  PlaceOrdersParams,
  ReplaceExecutionReport,
  ReplaceOrdersParams,
  TimeRangeResult,
  VenueResult,
} from './betting';
import { Operations, BettingAPIRequestParams, BettingAPIResponse } from './bettingApi';
import { authenticate as _authenticate } from '../auth/index';

const {
  BETFAIR_APP_KEY = '',
} = process.env;

const BASE_URL = 'https://api.betfair.com/exchange/betting/rest/v1.0';
const HEADERS = {
  'X-Application': BETFAIR_APP_KEY,
  Accept: 'application/json',
  'Content-type': 'application/json',
  'X-Authentication': '',
};

const bettingApi = async<T extends Operations>(operation: T, params: BettingAPIRequestParams<T>): Promise<BettingAPIResponse<T>> => {
  const response = await fetch(`${BASE_URL}/${operation}/`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(params),
  });
  return response.json();
};

export const authenticate = async (params: {certificate?: string, key?: string} = {}): Promise<void> => {
  HEADERS['X-Authentication'] = await _authenticate(params);
};

export const cancelOrders = async (params: CancelOrderParams): Promise<CancelExecutionReport> => bettingApi('cancelOrders', params);

export const listClearedOrders = async (params: ListClearedOrdersParams): Promise<ClearedOrderSummaryReport> => bettingApi('listClearedOrders', params);

export const listCompetitions = async (params: ListCompetitionsParams): Promise<CompetitionResult[]> => bettingApi('listCompetitions', params);

export const listCountries = async (params: ListCountriesParams): Promise<CountryCodeResult[]> => bettingApi('listCountries', params);

export const listCurrentOrders = async (params: ListCurrentOrdersParams): Promise<CurrentOrderSummary> => bettingApi('listCurrentOrders', params);

export const listEvents = async (params: ListEventsParams): Promise<EventResult[]> => bettingApi('listEvents', params);

export const listEventTypes = async (params: ListEventTypesParams): Promise<EventTypeResult[]> => bettingApi('listEventTypes', params);

export const listMarketBook = async (params: ListMarketBookParams): Promise<MarketBook[]> => bettingApi('listMarketBook', params);

export const listMarketCatalogue = async (params: ListMarketCatalogueParams): Promise<MarketCatalogue[]> => bettingApi('listMarketCatalogue', params);

export const listMarketProfitAndLoss = async (params: ListMarketProfitAndLoss): Promise<MarketProfitAndLoss[]> => bettingApi('listMarketProfitAndLoss', params);

export const listMarketTypes = async (params: ListMarketTypesParams): Promise<MarketTypeResult[]> => bettingApi('listMarketTypes', params);

export const listRunnerBook = async (params: ListRunnerBookParams): Promise<MarketBook[]> => bettingApi('listRunnerBook', params);

export const listTimeRanges = async (params: ListTimeRangesParams): Promise<TimeRangeResult[]> => bettingApi('listTimeRanges', params);

export const listVenues = async (params: MarketFilter): Promise<VenueResult[]> => bettingApi('listVenues', params);

export const replaceOrders = async (params: ReplaceOrdersParams): Promise<ReplaceExecutionReport> => bettingApi('replaceOrders', params);

export const placeOrders = async (params: PlaceOrdersParams): Promise<PlaceExecutionReport> => bettingApi('placeOrders', params);
