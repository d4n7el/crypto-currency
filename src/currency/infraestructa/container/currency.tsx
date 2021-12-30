import { useEffect, useState } from 'react';
import { getCryptoCurrencyService } from '../../domain/services/cryptoCurrency.service';
import { Card } from 'antd';
import { ICurrency } from '../dto/currencyDTO';
import DetailCurrency from '../view/detailCurrency';
const { Meta } = Card;

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
    <DetailCurrency id={id} currency={currency} loading={loading} />
  ) : null;
};

export default Currency;
