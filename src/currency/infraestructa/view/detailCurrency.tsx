import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCryptoCurrencyService } from '../../domain/services/cryptoCurrency.service';
import { Card, Avatar } from 'antd';
import { ICurrency } from '../dto/currencyDTO';
const { Meta } = Card;

interface IProps {
  id: number;
  currency: ICurrency;
  loading: boolean;
}

const DetailCurrency = ({ id, currency, loading }: IProps) => {
  const { t } = useTranslation();
  return (
    <div className="content-card-detail">
      {currency ? (
        <Card style={{ width: 340 }} loading={loading}>
          <div className="avatar-head">
            <div className="gradient-first"></div>
            <div className="opaque-default"></div>
            <Avatar size={42} className={'bg-4'}>
              {t(currency.symbol)}
            </Avatar>
          </div>
          <hr></hr>
          <br></br>
          <Meta title={currency.name} />
          <Meta description={`${t('rank')}: ${currency.rank}`} />
          <br></br>

          {Object.keys(currency).map((key) => {
            return (
              <div key={key} className="info-detail">
                <strong>{t(key)}:</strong>
                <p>{currency[key as keyof ICurrency]}</p>
              </div>
            );
          })}
        </Card>
      ) : null}
    </div>
  );
};

export default DetailCurrency;
