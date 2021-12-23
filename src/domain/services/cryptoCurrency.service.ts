import { getCryptoCurrency } from '../../infraestructura/repositories/cryptoCurrency.repository';
import { ICryptoCurrency } from '../../infraestructura/dto/cryptoCurrencyDTO';

export const getCryptoCurrencyService = async (): Promise<
  ICryptoCurrency[]
> => {
  return await getCryptoCurrency('tickers/', '');
};
