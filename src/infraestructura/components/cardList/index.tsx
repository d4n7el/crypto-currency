import React, { useEffect, useState } from 'react';
import { ICryptoCurrency } from '../../dto/cryptoCurrencyDTO';
import { Title, SubTitle } from '../title';
import { Card } from 'antd';
import { List, message } from 'antd';
import VirtualList from 'rc-virtual-list';

interface Iprops {
  loadMore: any;
  data: any;
  containerHeight: number;
  loading: boolean;
}

const CardList = ({ loadMore, data, containerHeight, loading }: Iprops) => {
  const onScroll = (e: any) => {
    if (e.target.scrollHeight - e.target.scrollTop === containerHeight) {
      loadMore();
    }
  };

  return (
    <>
      <div>
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <div className="gradient-first"></div>
          <div className="gradient-second"></div>
          <div className="gradient-third"></div>
          <List>
            <VirtualList
              data={data}
              height={containerHeight}
              itemHeight={47}
              itemKey="email"
              onScroll={onScroll}
            >
              {(item) => (
                <List.Item key={item.name}>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.nameid}</a>}
                    description={item.price_usd}
                  />
                </List.Item>
              )}
            </VirtualList>
          </List>
        </Card>
      </div>
    </>
  );
};

export default CardList;

CardList.defaultProps = {
  loadMore: () => {},
  data: [],
  containerHeight: 400,
};
