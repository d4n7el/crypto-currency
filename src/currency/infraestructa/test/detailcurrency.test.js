import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import DetailCurrency from '../view/detailCurrency';
import { getCryptoCurrencyService } from '../../domain/services/cryptoCurrency.service';
import { FAKE_CURRENCY } from '../../../utils/const';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
    };
  },
}));

test('render content detail currency', () => {
  render(
    <DetailCurrency
      currency={FAKE_CURRENCY}
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
