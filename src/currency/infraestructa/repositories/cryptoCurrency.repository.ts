import { http } from '../http/index';
import { ICryptoCurrency } from '../dto/cryptoCurrencyDTO';

export const getCryptoCurrencies = async (
  path: string,
  token: string
): Promise<ICryptoCurrency[]> => {
  return await http.get<ICryptoCurrency[]>(path, token);
};