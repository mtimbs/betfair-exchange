/* eslint-disable no-use-before-define */

/* //////////// Market Betting Enums /////////
https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni/Betting+Enums
///////////////////////////////////////// */

export type BetStatus =
  | 'CANCELLED'
  | 'LAPSED'
  | 'SETTLED'
  | 'VOIDED'

export type BetTargetType =
  | 'BACKERS_PROFIT'
  | 'PAYOUT'

export type ExecutionReportErrorCode =
  | 'BET_ACTION_ERROR'
  | 'DUPLICATE_BETIDS'
  | 'DUPLICATE_TRANSACTION'
  | 'ERROR_IN_MATCHER'
  | 'INSUFFICIENT_FUNDS'
  | 'INVALID_ACCOUNT_STATE'
  | 'INVALID_MARKET_ID'
  | 'INVALID_MARKET_VERSION'
  | 'INVALID_ORDER'
  | 'INVALID_PROFIT_RATIO'
  | 'INVALID_WALLET_STATUS'
  | 'LOSS_LIMIT_EXCEEDED'
  | 'MARKET_NOT_OPEN_FOR_BETTING'
  | 'MARKET_SUSPENDED'
  | 'NO_ACTION_REQUIRED'
  | 'NO_CHASING'
  | 'PERMISSION_DENIED'
  | 'PROCESSED_WITH_ERRORS'
  | 'REGULATOR_IS_NOT_AVAILABLE'
  | 'REJECTED_BY_REGULATOR'
  | 'SERVICE_UNAVAILABLE'
  | 'TOO_MANY_INSTRUCTIONS'

export type ExecutionReportStatus =
  | 'FAILURE'
  | 'PROCESSED_WITH_ERRORS'
  | 'SUCCESS'
  | 'TIMEOUT'

export type GroupBy =
  | 'BET'
  | 'EVENT'
  | 'EVENT_TYPE'
  | 'MARKET'
  | 'SIDE'

export type InstructionReportErrorCode =
  | 'BET_IN_PROGRESS'
  | 'BET_LAPSED_PRICE_IMPROVEMENT_TOO_LARGE'
  | 'BET_TAKEN_OR_LAPSED'
  | 'CANCELLED_NOT_PLACED'
  | 'ERROR_IN_MATCHER'
  | 'ERROR_IN_ORDER'
  | 'INSUFFICIENT_FUNDS'
  | 'INVALID_BACK_LAY_COMBINATION'
  | 'INVALID_BET_ID'
  | 'INVALID_BET_SIZE'
  | 'INVALID_BID_TYPE'
  | 'INVALID_CUSTOMER_ORDER_REF'
  | 'INVALID_MIN_FILL_SIZE'
  | 'INVALID_ODDS'
  | 'INVALID_ORDER_TYPE'
  | 'INVALID_PERSISTENCE_TYPE'
  | 'INVALID_PRICE_EDIT'
  | 'INVALID_RUNNER'
  | 'LOSS_LIMIT_EXCEEDED'
  | 'MARKET_NOT_OPEN_FOR_BETTING'
  | 'MARKET_NOT_OPEN_FOR_BSP_BETTING'
  | 'NO_ACTION_REQUIRED'
  | 'RELATED_ACTION_FAILED'
  | 'RUNNER_REMOVED'
  | 'TIME_IN_FORCE_CONFLICT'
  | 'UNEXPECTED_MIN_FILL_SIZE'
  | 'UNEXPECTED_PERSISTENCE_TYPE'

export type InstructionReportStatus =
  | 'FAILURE'
  | 'SUCCESS'
  | 'TIMEOUT'

export type MarketBettingType =
  | 'ASIAN_HANDICAP_DOUBLE_LINE'
  | 'ASIAN_HANDICAP_SINGLE_LINE'
  | 'FIXED_ODDS'
  | 'LINE'
  | 'ODDS'
  | 'RANGE'

export type MarketProjection =
  | 'COMPETITION'
  | 'EVENT'
  | 'EVENT_TYPE'
  | 'MARKET_DESCRIPTION'
  | 'MARKET_START_TIME'
  | 'RUNNER_DESCRIPTION'
  | 'RUNNER_METADATA'

export type MarketSort =
  | 'FIRST_TO_START'
  | 'LAST_TO_START'
  | 'MAXIMUM_AVAILABLE'
  | 'MAXIMUM_TRADED'
  | 'MINIMUM_AVAILABLE'
  | 'MINIMUM_TRADED'

export type MarketStatus =
  | 'CLOSED'
  | 'INACTIVE'
  | 'OPEN'
  | 'SUSPENDED'

export type MatchProjection =
  | 'NO_ROLLUP'
  | 'ROLLED_UP_BY_AVG_PRICE'
  | 'ROLLED_UP_BY_PRICE'

export type OrderBy =
  | 'BY_BET'
  | 'BY_MARKET'
  | 'BY_MATCH_TIME'
  | 'BY_PLACE_TIME'
  | 'BY_SETTLED_TIME'
  | 'BY_VOID_TIME'

export type OrderProjection =
  | 'ALL'
  | 'EXECUTABLE'
  | 'EXECUTION_COMPLETE'

export type OrderStatus =
  | 'EXECUTABLE'
  | 'EXECUTION_COMPLETE'
  | 'EXPIRED'
  | 'PENDING'

export type OrderType =
  | 'LIMIT'
  | 'LIMIT_ON_CLOSE'
  | 'MARKET_ON_CLOSE'

export type PersistenceType =
  | 'LAPSE'
  | 'MARKET_ON_CLOSE'
  | 'PERSIST'

export type PriceData =
  | 'EX_ALL_OFFERS'
  | 'EX_BEST_OFFERS'
  | 'EX_TRADED'
  | 'SP_AVAILABLE'
  | 'SP_TRADED'

export type PriceLadderType =
  | 'CLASSIC'
  | 'FINEST'
  | 'LINE_RANGE'

export type RollupModel =
  | 'MANAGED_LIABILITY'
  | 'NONE'
  | 'STAKE'
  | 'PAYOUT'

export type RunnerStatus =
  | 'ACTIVE'
  | 'HIDDEN'
  | 'LOSER'
  | 'PLACED'
  | 'REMOVED'
  | 'REMOVED_VACANT'
  | 'WINNER'

export type Side =
  | 'BACK'
  | 'LAY'

export type SortDir =
  | 'EARLIEST_TO_LATEST'
  | 'LATEST_TO_EARLIEST'

export type TimeGranularity =
  | 'DAYS'
  | 'HOURS'
  | 'MINUTES'

export type TimeInForce = 'FILL_OR_KILL'

/* //////////// Betting Type Definitions /////////
https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni/Betting+Type+Definitions
///////////////////////////////////////// */

// Provide more context for consumers of wrapper
type int = number;
type double = number;
type long = number;

export type CancelInstruction = {
  betId?: string;
  sizeReduction?: double;
}

export type CancelExecutionReport = {
  customerRef?: string;
  errorCode?: ExecutionReportErrorCode;
  instructionReports?: CancelInstructionReport[];
  marketId?: string;
  status: ExecutionReportStatus;
}

export type CancelInstructionReport = {
  cancelledDate?: string;
  errorCode?: InstructionReportErrorCode;
  instruction?: CancelInstruction;
  sizeCancelled: double;
  status: InstructionReportStatus
}

export type ClearedOrderSummary = {
  betCount?: int;
  betId?: string;
  betOutcome?: string;
  commission?: double;
  customerOrderRef?: string;
  customerStrategyRef?: string;
  eventId?: string;
  eventTypeId?: string;
  handicap?: double;
  itemDescription?: ItemDescription;
  lastMatchedDate?: string;
  marketId?: string;
  orderType?: OrderType;
  persistenceType?: PersistenceType;
  placedDate?: string;
  priceMatched?: double;
  priceReduced?: boolean;
  priceRequested?: double;
  profit?: double;
  selectionId?: long;
  settledDate?: string;
  side?: Side;
  sizeCancelled?: double;
  sizeSettled?: double;
}

export type ClearedOrderSummaryReport = {
  clearedOrders: ClearedOrderSummary[];
  moreAvailable: boolean;
}

export type Competition = {
  id?: string;
  name?: string;
}

export type CompetitionResult = {
  competition?: Competition;
  competitionRegion?: string;
  marketCount?: int;
}

export type CountryCodeResult = {
  countryCode?: string; // TODO: Replace with list of ISO-2 codes
  marketCount?: int;
}

export type CurrentOrderSummary = {
  averagePriceMatched?: double;
  betId: string;
  bspLiability: double;
  customerOrderRef?: string;
  customerStrategyRef?: string;
  handicap: double;
  marketId: string;
  matchedDate: string;
  orderType: OrderType;
  persistenceType: PersistenceType;
  placedDate: string;
  priceSize: PriceSize;
  regulatorAuthCode?: string;
  regulatorCode?: string;
  selectionId: long;
  side: Side;
  sizeCancelled?: double;
  sizeLapsed?: double;
  sizeMatched?: double;
  sizeRemaining?: double;
  sizeVoided?: double;
  status: OrderStatus;
}

export type CurrentOrderSummaryReport = {
  currentOrders: CurrentOrderSummary[];
  moreAvailable: boolean;
}

export type Event = {
  countryCode?: string;
  id?: string;
  name?: string;
  openDate?: string;
  timezone?: string;
  venue?: string;
}

export type EventResult = {
  event?: Event;
  marketCount?: int;
}

export type EventType = {
  id?: string;
  name?: string;
}

export type EventTypeResult = {
  marketType?: string;
  marketCount?: int;
}

export type ExBestOffersOverrides = {
  bestPricesDepth?: int;
  rollupLiabilityFactor?: int;
  rollupLiabilityThreshold?: double;
  rollupLimit?: int;
  rollupModel?: RollupModel;
}

export type ExchangePrices = {
  availableToBack?: PriceSize[];
  availableToLay?: PriceSize[];
  tradedVolume?: PriceSize[];
}

export type ItemDescription = {
  eachWayDivisor?: double;
  eventDesc?: string;
  eventTypeDesc?: string;
  marketDesc?: string;
  marketStartTime?: string;
  marketType?: string;
  numberOfWinners?: int;
  runnerDesc?: string;
}

export type KeyLineDescription = {
  keyLine?: KeyLineSelection[];
}

export type KeyLineSelection = {
  handicap?: double;
  selectionId?: long;
}

export type LimitOnCloseOrder = {
  liability: double;
  price: double;
}

export type LimitOrder = {
  betTargetSize?: double;
  betTargetType?: BetTargetType;
  minFillSize?: double;
  persistenceType: PersistenceType;
  price: double;
  size: double;
  timeInForce: TimeInForce;
}

export type MarketBook = {
  betDelay?: int;
  bspReconciled?: boolean;
  complete?: boolean;
  crossMatching?: boolean;
  inplay?: boolean;
  isMarketDataDelayed: boolean;
  keyLineDescription?: KeyLineDescription;
  lastMatchTime?: string;
  marketId: string;
  numberOfActiveRunners?: int;
  numberOfRunners?: int;
  numberOfWinners?: int;
  runners?: Runner[];
  runnersVoidable?: boolean;
  status?: MarketStatus;
  totalAvailable?: double;
  totalMatched?: double;
  version?: long;
}

export type MarketCatalogue = {
  competition?: Competition;
  description?: MarketDescription;
  event?: Event;
  eventType?: EventType;
  marketId: string;
  marketName: string;
  marketStartTime?: string;
  runners?: RunnerCatalog[];
  totalMatched?: double;
}

export type MarketDescription = {
  bettingType: MarketBettingType;
  bspMarket: boolean;
  clarifications?: string;
  discountAllowed: boolean;
  eachWayDivisor?: double;
  lineRangeInfo?: MarketLineRangeInfo;
  marketBaseRate: double;
  marketTime: string;
  marketType: string;
  persistenceEnabled: boolean;
  priceLadderDescription?: PriceLadderDescription;
  raceType: string;
  regulator: 'GIBRALTAR REGULATOR' | 'MR_ESP' | 'MR_IT';
  rules?: string;
  rulesHasDate?: boolean;
  settleTime?: string;
  suspendTime: string;
  turnInPlayEnabled: boolean;
  wallet?: string;
}

export type MarketFilter = {
  bspOnly?: boolean;
  competitionIds?: string[];
  eventIds?: string[];
  eventTypeIds?: string[];
  exchangeIds?: string[];
  inPlayOnly?: boolean;
  marketBettingTypes?: MarketBettingType[];
  marketCountries?: string[];
  marketIds?: string[];
  marketStartTime?: TimeRange;
  marketTypeCodes?: string[];
  raceTypes?: string[];
  textQuery?: string;
  turnInPlayEnabled?: boolean;
  venues?: string[];
  withOrders?: OrderStatus[];
}

export type MarketLicence = {
  clarifications?: string;
  rules?: string;
  rulesHasDate?: boolean;
  wallet: string;
}

export type MarketLineRangeInfo = {
  interval: double;
  marketUnit: string;
  maxUnitValue: double;
  minUnitValue: double;
}

export type MarketOnCloseOrder = {
  liability: double;
}

export type MarketProfitAndLoss = {
  commissionApplied?: double;
  marketId?: string;
  profitAndLoss?: RunnerProfitAndLoss[];
}

export type MarketRates = {
  discountAllowed: boolean;
  marketBaseRate: double;
}

export type MarketTypeResult = {
  marketType?: string;
  marketCount?: int;
}

export type MarketVersion = {
  version?: long;
}

export type Match = {
  betId?: string;
  matchDate?: string;
  matchId?: string;
  price: double;
  side: Side;
  size: double;
}

export type Order = {
  avgPriceMatched?: double;
  betId: string;
  bspLiability: double;
  customerOrderRef?: string;
  customerStrategyRef?: string;
  orderType: OrderType;
  persistenceType: PersistenceType;
  placedDate: string;
  price: double;
  side: Side;
  size: number;
  sizeCancelled?: double;
  sizeLapsed?: double;
  sizeMatched?: double;
  sizeRemaining?: double;
  sizeVoided?: double;
  status: OrderStatus;
}

export type PlaceExecutionReport = {
  customerRef?: string;
  errorCode?: ExecutionReportErrorCode;
  instructionReports?: PlaceInstructionReport[];
  marketId?: string;
  status: ExecutionReportStatus;
}

export type PlaceInstruction = {
  customerOrderRef?: string;
  handicap?: double;
  limitOnCloseOrder?: LimitOnCloseOrder;
  limitOrder?: LimitOrder;
  marketOnCloseOrder?: MarketOnCloseOrder;
  orderType: OrderType;
  selectionId: long;
  side: Side;
}

export type PlaceInstructionReport = {
  averagePriceMatched?: double;
  betId?: string;
  errorCode?: InstructionReportErrorCode
  instruction: PlaceInstruction;
  orderStatus?: OrderStatus;
  placedDate?: string;
  sizeMatched?: double;
  status: InstructionReportStatus;
}

export type PriceLadderDescription = {
  type?: PriceLadderType
}

export type PriceProjection = {
  exBestOffersOverrides?: ExBestOffersOverrides;
  priceData?: PriceData[];
  rolloverStakes?: boolean;
  virtualise?: boolean;
}

export type PriceSize = {
  price: double;
  size: double;
}

export type ReplaceExecutionReport = {
  customerRef?: string;
  errorCode?: ExecutionReportErrorCode;
  instructionReports?: ReplaceInstructionReport[];
  marketId?: string;
  status: ExecutionReportStatus;
}

export type ReplaceInstruction = {
  betId: string;
  newPrice: double;
}

export type ReplaceInstructionReport = {
  cancelInstructionReport?: CancelInstructionReport;
  errorCode?: InstructionReportErrorCode;
  placeInstructionReport?: PlaceInstructionReport;
  status: InstructionReportStatus;
}

export type Runner = {
  adjustmentFactor: double;
  ex?: ExchangePrices;
  handicap: double;
  lastPriceTraded?: double;
  matches?: Match[];
  matchesByStrategy?: Record<string, Match>;
  orders?: Order[];
  removalDate?: string;
  selectionId: long;
  sp?: StartingPrices;
  status: RunnerStatus;
  totalMatched?: double;
}

export type RunnerId = {
  handicap?: double;
  marketId?: string;
  selectionId?: long;
}

export type RunnerCatalog = {
  handicap: double;
  metadata?: Record<string, string>;
  runnerName: string;
  selectionId: long;
  sortPriority: int;
}

export type StartingPrices = {
  actualSP?: double;
  backStakeTaken?: PriceSize[];
  farPrice?: double;
  layLiabilityTaken?: PriceSize[];
  nearPrice?: double;
}

export type RunnerProfitAndLoss = {
  ifLose?: double;
  ifPlace?: double;
  ifWin?: double;
  selectionId?: long;
}

export type TimeRange = {
  from: string;
  to: string;
}

export type TimeRangeResult = {
  marketCount?: int;
  timeRange: TimeRange;
}

export type UpdateExecutionReport = {
  customerRef?: string;
  errorCode?: ExecutionReportErrorCode;
  instructionReports?: UpdateInstructionReport[];
  marketId?: string;
  status: ExecutionReportStatus;
}

export type UpdateInstruction = {
  betId: string;
  newPersistenceType: PersistenceType;
}

export type UpdateInstructionReport = {
  errorCode?: InstructionReportErrorCode;
  instruction: UpdateInstruction;
  status: InstructionReportStatus;
}

export type VenueResult = {
  marketCount?: int;
  venue?: string;
}

/* //////////// Custom Type Definitions /////////
//             Request Parameters             //
////////////////////////////////////////////// */
type FilterAndLocale = {
  filter: MarketFilter;
  locale?: string;
}

export type CancelOrderParams = {
  marketId?: string;
  instructions?: CancelInstruction[];
  customerRef?: string;
}

export type ListClearedOrdersParams = {
  betIds?: string[];
  betStatus?: BetStatus;
  customerOrderRefs?: string[];
  customerStrategyRefs?: string[];
  eventIds?: string[];
  eventTypeIds?: string[];
  fromRecord?: int;
  groupBy?: GroupBy;
  includeItemDescription?: boolean;
  locale?: string;
  marketIds?: string[];
  recordCount?: int;
  runnerIds?: RunnerId[];
  settledDateRange?: TimeRange;
  side?: Side;
}

export type ListCompetitionsParams = FilterAndLocale

export type ListCountriesParams = FilterAndLocale

export type ListCurrentOrdersParams = {
  betIds?: string[];
  customerOrderRefs?: string[];
  customerStrategyRefs?: string[];
  dateRange?: TimeRange;
  fromRecord?: int;
  marketIds?: string[];
  orderBy?: OrderBy;
  orderProjection?: OrderProjection;
  recordCount?: int;
  sortDir?: SortDir;
}

export type ListEventsParams = FilterAndLocale

export type ListEventTypesParams = FilterAndLocale

export type ListMarketBookParams = {
  betIds?: string[];
  currencyCode?: string;
  customerStrategyRefs?: string[];
  includeOverallPosition?: boolean;
  locale?: string;
  marketIds: string[];
  matchedSince?: string;
  matchProjection?: MatchProjection;
  orderProjection?: OrderProjection;
  partitionMatchedByStrategyRef?: boolean;
  priceProjection?: PriceProjection;
}

export type ListMarketCatalogueParams = FilterAndLocale & {
  marketProjection?: MarketProjection[];
  maxResults: int;
  sort?: MarketSort;
}

export type ListMarketProfitAndLoss = {
  includeBspBets?: boolean;
  includeSettledBets?: boolean;
  marketIds?: string[];
  netOfCommission?: boolean;
}

export type ListMarketTypesParams = FilterAndLocale

export type ListRunnerBookParams = {
  betIds?: string[];
  currencyCode?: string;
  customerStrategyRefs?: string;
  handicap?: double;
  includeOverallPosition?: boolean;
  locale?: string;
  marketId: string;
  matchProjection?: MatchProjection;
  matchedSince?: string;
  orderProjection?: OrderProjection;
  partitionMatchedByStrategyRef?: boolean;
  priceProjection?: PriceProjection;
  selectionId: string;
}

export type ListTimeRangesParams = {
  filter: MarketFilter;
  granularity: TimeGranularity;
}

export type ListVenueParams = FilterAndLocale

export type PlaceOrdersParams = {
  async?: boolean;
  customerRef?: string;
  customerStrategyRef?: string;
  instructions: PlaceInstruction[];
  marketId: string;
  marketVersion: MarketVersion;
}

export type ReplaceOrdersParams = {
  async?: boolean;
  customerRef: string;
  instructions: ReplaceInstruction[];
  marketId: string;
  marketVersion?: MarketVersion;
}
