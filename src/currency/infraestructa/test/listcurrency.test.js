import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ListCurrencies from '../view/listCurrencies';
import { getCryptoCurrenciesService } from '../../domain/services/cryptoCurrency.service';

const fakeCurrencyies = {
  data: [
    {
      id: '90',
      symbol: 'BTC',
      name: 'Bitcoin',
      nameid: 'bitcoin',
      rank: 1,
      price_usd: '47151.66',
      percent_change_24h: '1.08',
      percent_change_1h: '0.06',
      percent_change_7d: '-3.17',
      price_btc: '1.00',
      market_cap_usd: '891464067548.55',
      volume24: 18391693844.776707,
      volume24a: 22838943810.099854,
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
      price_usd: '3726.01',
      percent_change_24h: '1.93',
      percent_change_1h: '0.54',
      percent_change_7d: '-5.77',
      price_btc: '0.079053',
      market_cap_usd: '442740189241.74',
      volume24: 9287302555.086826,
      volume24a: 12553922634.936426,
      csupply: '118824085.00',
      tsupply: '118824085',
      msupply: '',
    },
    {
      id: '44497',
      symbol: 'RENBTC',
      name: 'renBTC',
      nameid: 'renbtc',
      rank: 99,
      price_usd: '46611.15',
      percent_change_24h: '1.06',
      percent_change_1h: '0.11',
      percent_change_7d: '-3.36',
      price_btc: '0.988922',
      market_cap_usd: '809728842.56',
      volume24: 1069312.5184863182,
      volume24a: 1413747.376635775,
      csupply: '17372.00',
      tsupply: '15344.21861199',
      msupply: '13698',
    },
  ],
};

test('render content list currency', () => {
  render(
    <ListCurrencies
      currencyCollection={fakeCurrencyies.data}
      viewAvatar={false}
    />
  );

  const elementAction = screen.getByTestId('nameid_bitcoin');
  expect(elementAction).toBeInTheDocument();
});

test('axios get data currencies', async () => {
  try {
    const data = await getCryptoCurrenciesService(0);
    expect(data).not.toBeNull();
    expect(data.length).toBeGreaterThan(1);
  } catch (e) {
    expect(e).toMatch('error');
  }
});
