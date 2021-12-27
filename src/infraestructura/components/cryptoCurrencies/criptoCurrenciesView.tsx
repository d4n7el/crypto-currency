import React, { useEffect, useState } from 'react';
import { getCryptoCurrencyService } from '../../../domain/services/cryptoCurrency.service';
import { ICryptoCurrency } from '../../dto/cryptoCurrencyDTO';
import { Title, SubTitle } from '../title';
import CardList from '../cardList';

const ListCurrencyes = () => {
  const [cryptoCurrency, setCryptoCurrency] = useState<ICryptoCurrency[]>([]);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(0);

  useEffect(() => {
    get_data();
  }, [start]);

  const get_data = async () => {
    const data = await getCryptoCurrencyService(start);
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
        />
      </div>
    </>
  );
};

export default ListCurrencyes;
