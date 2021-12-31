const AVAILABLE_LANGUAGES_ENV = process.env.REACT_APP_AVAILABLE_LANGUAGES
  ? process.env.REACT_APP_AVAILABLE_LANGUAGES.split(',')
  : ['en', 'es'];

export const DEFAULT_LANGUAGE = AVAILABLE_LANGUAGES_ENV[0];

export const LIST_LANGUAGES = AVAILABLE_LANGUAGES_ENV;

export const FAKE_CURRENCIES = {
  data: [
    {
      id: '90',
      symbol: 'BTC',
      name: 'Bitcoin',
      nameid: 'bitcoin',
      rank: 1,
      price_usd: '46414.36',
      percent_change_24h: '-1.35',
      percent_change_1h: '0.01',
      percent_change_7d: '-9.29',
      price_btc: '1.00',
      market_cap_usd: '877524594846.81',
      volume24: 21440100748.77711,
      volume24a: 20477392148.352036,
      csupply: '18906315.00',
      tsupply: '18906315',
      msupply: '21000000',
    },
    {
      id: '80',
      symbol: 'ETH',
      name: 'Ethereum',
      nameid: 'ethereum',
      rank: 2,
      price_usd: '3690.73',
      percent_change_24h: '-0.31',
      percent_change_1h: '-0.12',
      percent_change_7d: '-9.84',
      price_btc: '0.079546',
      market_cap_usd: '438547226701.83',
      volume24: 11117758033.640423,
      volume24a: 10826031533.716125,
      csupply: '118824085.00',
      tsupply: '118824085',
      msupply: '',
    },
    {
      id: '2710',
      symbol: 'BNB',
      name: 'Binance Coin',
      nameid: 'binance-coin',
      rank: 3,
      price_usd: '513.19',
      percent_change_24h: '-0.73',
      percent_change_1h: '-0.06',
      percent_change_7d: '-6.44',
      price_btc: '0.011061',
      market_cap_usd: '85599912097.01',
      volume24: 1221668007.7771811,
      volume24a: 1235103173.9922216,
      csupply: '166801148.00',
      tsupply: '192443301',
      msupply: '200000000',
    },
    {
      id: '518',
      symbol: 'USDT',
      name: 'Tether',
      nameid: 'tether',
      rank: 4,
      price_usd: '1.00',
      percent_change_24h: '-0.01',
      percent_change_1h: '-0.02',
      percent_change_7d: '0.09',
      price_btc: '0.000022',
      market_cap_usd: '73674712332.92',
      volume24: 45858202971.50572,
      volume24a: 46575316278.02133,
      csupply: '73578322706.00',
      tsupply: '68261274250',
      msupply: '',
    },
  ],
};

export const FAKE_CURRENCY = FAKE_CURRENCIES.data[0];
