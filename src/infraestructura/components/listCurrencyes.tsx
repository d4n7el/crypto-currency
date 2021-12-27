import React, { useEffect, useState } from 'react';
import { getCryptoCurrencyService } from '../../domain/services/cryptoCurrency.service';
import { ICryptoCurrency } from '../dto/cryptoCurrencyDTO';

const ListCurrencyes = () => {
  const [cryptoCurrency, setCryptoCurrency] = useState<ICryptoCurrency[]>([]);

  useEffect(() => {
    get_data();
  }, []);

  const get_data = async () => {
    const data = await getCryptoCurrencyService();
    setCryptoCurrency(data);
  };

  console.log(cryptoCurrency);

  return <>hola</>;
};

export default ListCurrencyes;
