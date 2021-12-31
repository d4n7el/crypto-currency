import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import DetailCurrency from '../view/detailCurrency';
import { getCryptoCurrencyService } from '../../domain/services/cryptoCurrency.service';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
    };
  },
}));

const fakeCurrency = {
  id: '90',
  symbol: 'BTC',
  name: 'Bitcoin',
  nameid: 'bitcoin',
  rank: 1,
  price_usd: '47173.16',
  percent_change_24h: '1.44',
  percent_change_1h: '-0.02',
  percent_change_7d: '-2.46',
  market_cap_usd: '891870668976.24',
  volume24: '20050639835.62',
  volume24_native: '425043.37',
  csupply: '18906315.00',
  price_btc: '1.00',
  tsupply: '18906315',
  msupply: '21000000',
};

test('render content detail currency', () => {
  render(
    <DetailCurrency
      currency={fakeCurrency}
      loading={false}
      viewAvatar={false}
    />
  );

  const searchSimbol = screen.getByText(/symbol/i);
  expect(searchSimbol).toBeInTheDocument();

  const searchId = screen.getByText(/BTC/);
  expect(searchId).toBeInTheDocument();
});

test('axios get data currency', async () => {
  try {
    const data = await getCryptoCurrencyService(90);
    expect(data).not.toBeNull();
    expect(data.length).toEqual(1);
  } catch (e) {
    expect(e).toMatch('error');
  }
});
