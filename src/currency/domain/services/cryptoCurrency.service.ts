import { getCryptoCurrencies } from '../../infraestructa/repositories/currency.repository';
import { ICurrency } from '../../infraestructa/dto/currencyDTO';

export const getCryptoCurrenciesService = async (
  start: number
): Promise<ICurrency[]> => {
  return await getCryptoCurrencies(`tickers/?start=${start}&limit=100`, '');
};

export const getCryptoCurrencyService = async (
  id: number
): Promise<ICurrency[]> => {
  return await getCryptoCurrencies(`ticker/?id=${id}`, '');
};
