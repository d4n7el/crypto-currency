import React, { useEffect, useState } from 'react';
import { getCryptoCurrenciesService } from '../../../domain/services/cryptoCurrency.service';
import { ICryptoCurrency } from '../../dto/cryptoCurrencyDTO';
import { Title, SubTitle } from '../title';
import CardList from '../cardList';
import CryptoCurrencyView from './cryptoCurrencyView';
import { UseLanguage } from '../../context/LanguageContext';

const ListCurrencyes = () => {
  const [cryptoCurrency, setCryptoCurrency] = useState<ICryptoCurrency[]>([]);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(0);
  const [currentCurrencyID, setCurrentCurrencyID] = useState<number>(0);

  useEffect(() => {
    get_currencies();
  }, [start]);

  const get_currencies = async () => {
    const data = await getCryptoCurrenciesService(start);
    setCryptoCurrency([...cryptoCurrency, ...data]);
    setLoading(false);
  };

  return (
    <>
      <Title
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper"
        style={{}}
      />
      <SubTitle
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper"
        style={{}}
      />

      <div className="content-card-list">
        <CardList
          loading={loading}
          loadMore={() => {
            setStart(start + 100);
          }}
          data={cryptoCurrency}
          containerHeight={400}
          setCurrent={setCurrentCurrencyID}
          currentID={currentCurrencyID}
        />
        <CryptoCurrencyView id={currentCurrencyID} />
      </div>
    </>
  );
};

export default ListCurrencyes;
