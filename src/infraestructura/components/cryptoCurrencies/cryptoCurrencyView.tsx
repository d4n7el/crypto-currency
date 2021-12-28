import React, { useEffect, useState } from 'react';
import { getCryptoCurrencyService } from '../../../domain/services/cryptoCurrency.service';
import { Card, Avatar } from 'antd';
import { ICryptoCurrency } from '../../dto/cryptoCurrencyDTO';
import { log } from 'console';

const { Meta } = Card;

interface IProps {
  id: number;
}

const CryptoCurrencyView = ({ id }: IProps) => {
  const [currency, setCurrency] = useState<ICryptoCurrency>();
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

  console.log({ currency });

  return (
    <div className="content-card-detail">
      {currency ? (
        <Card style={{ width: 340 }} loading={loading}>
          <div className="avatar-head">
            <Avatar size={42} className={'bg-4'}>
              {currency.symbol}
            </Avatar>
          </div>

          <Meta title={currency.name} />
          <Meta description={`Rank: ${currency.rank}`} />
          <hr></hr>
          <br></br>

          {Object.keys(currency).map((key) => {
            return (
              <div className="info-detail">
                <strong>{key}:</strong>
                <p>{currency[key as keyof ICryptoCurrency]}</p>
              </div>
            );
          })}
        </Card>
      ) : null}
    </div>
  );
};

export default CryptoCurrencyView;
