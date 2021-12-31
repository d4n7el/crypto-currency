import { http } from '../../../infraestructura/http/index';
import { ICurrency } from '../dto/currencyDTO';

export const getCryptoCurrencies = async (
  path: string,
  token: string
): Promise<ICurrency[]> => {
  return await http.get<ICurrency[]>(path, token);
};
