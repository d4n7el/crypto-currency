import { useEffect, useState } from 'react';
import { getCryptoCurrenciesService } from '../../domain/services/cryptoCurrency.service';
import { ICurrency } from '../dto/currencyDTO';
import ListCurrencies from '../view/listCurrencies';

const Currencies = () => {
  const [currencyCollection, setCurrencyCollection] = useState<ICurrency[]>([]);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(0);
  const [currentCurrencyID, setCurrentCurrencyID] = useState<number>(0);

  useEffect(() => {
    get_currencies();
  }, [start]);

  const get_currencies = async () => {
    const data = await getCryptoCurrenciesService(start);
    setCurrencyCollection([...currencyCollection, ...data]);
    setLoading(false);
  };

  return (
    <ListCurrencies
      loading={loading}
      setStart={setStart}
      start={start}
      currencyCollection={currencyCollection}
      setCurrentCurrencyID={setCurrentCurrencyID}
      currentCurrencyID={currentCurrencyID}
      viewAvatar={true}
    />
  );
};

export default Currencies;
