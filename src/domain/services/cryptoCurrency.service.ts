import { getCryptoCurrencies } from '../../infraestructura/repositories/cryptoCurrency.repository';
import { ICryptoCurrency } from '../../infraestructura/dto/cryptoCurrencyDTO';

export const getCryptoCurrenciesService = async (
  start: number
): Promise<ICryptoCurrency[]> => {
  return await getCryptoCurrencies(`tickers/?start=${start}&limit=100`, '');
};

export const getCryptoCurrencyService = async (
  id: number
): Promise<ICryptoCurrency[]> => {
  return await getCryptoCurrencies(`ticker/?id=${id}`, '');
};
