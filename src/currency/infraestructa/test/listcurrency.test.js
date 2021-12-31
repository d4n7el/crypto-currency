import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ListCurrencies from '../view/listCurrencies';
import { getCryptoCurrenciesService } from '../../domain/services/cryptoCurrency.service';
import { FAKE_CURRENCIES } from '../../../utils/const';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
    };
  },
}));

test('render content list currency', () => {
  render(
    <ListCurrencies
      currencyCollection={FAKE_CURRENCIES.data}
      viewAvatar={false}
    />
  );

  const elementAction = screen.getByTestId('nameid_Bitcoin');
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
