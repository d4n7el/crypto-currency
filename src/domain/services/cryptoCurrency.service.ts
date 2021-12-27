import { getCryptoCurrency } from '../../infraestructura/repositories/cryptoCurrency.repository';
import { ICryptoCurrency } from '../../infraestructura/dto/cryptoCurrencyDTO';

export const getCryptoCurrencyService = async (
  start: number
): Promise<ICryptoCurrency[]> => {
  return await getCryptoCurrency(`tickers/?start=${start}&limit=100`, '');
};
