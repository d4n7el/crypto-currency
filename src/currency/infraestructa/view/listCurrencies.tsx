import { useEffect, useState } from 'react';
import { getCryptoCurrenciesService } from '../../domain/services/cryptoCurrency.service';
import { ICurrency } from '../dto/currencyDTO';
import { Title, SubTitle } from '../../../infraestructura/components/title';
import CardList from '../../../infraestructura/components/cardList';
import Currency from '../container/currency';

interface IProps {
  loading: boolean;
  setStart: any;
  start: number;
  currencyCollection: Array<ICurrency>;
  setCurrentCurrencyID: any;
  currentCurrencyID: number;
}

const ListCurrencies = ({
  loading,
  setStart,
  start,
  currencyCollection,
  setCurrentCurrencyID,
  currentCurrencyID,
}: IProps) => {
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
          data={currencyCollection}
          containerHeight={400}
          setCurrent={setCurrentCurrencyID}
          currentID={currentCurrencyID}
        />
        <Currency id={currentCurrencyID} />
      </div>
    </>
  );
};

export default ListCurrencies;