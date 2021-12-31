import { useEffect, useState } from 'react';
import { getCryptoCurrencyService } from '../../domain/services/cryptoCurrency.service';
import { ICurrency } from '../dto/currencyDTO';
import DetailCurrency from '../view/detailCurrency';

interface IProps {
  id: number;
}

const Currency = ({ id }: IProps) => {
  const [currency, setCurrency] = useState<ICurrency>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    get_currency();
  }, [id]);

  const get_currency = async () => {
    if (id) {
      const data = await getCryptoCurrencyService(id);
      setCurrency(data[0]);
      setLoading(false);
    }
  };

  return currency ? (
    <DetailCurrency currency={currency} loading={loading} viewAvatar={true} />
  ) : null;
};

export default Currency;
