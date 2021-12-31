import { ICardList } from '../infraestructura/interface/cardList';
import { ICurrency } from '../currency/infraestructa/dto/currencyDTO';

export const mapCurrencyToListCard = (data: ICurrency[]): ICardList[] => {
  let dataReturn: ICardList[] = [];
  let itemListCard: ICardList;

  data.forEach((currency: ICurrency) => {
    itemListCard = {
      id: '',
      avatarLetter: '',
      description: '',
      title: '',
    };
    itemListCard.id = currency.id;
    itemListCard.avatarLetter = currency.symbol.split('')[0];
    itemListCard.description = currency.price_usd;
    itemListCard.title = currency.name;

    dataReturn = [...dataReturn, itemListCard];
  });

  return dataReturn;
};
