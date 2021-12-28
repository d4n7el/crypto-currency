import React, { useState } from 'react';
import { List, Avatar, Card } from 'antd';
import VirtualList from 'rc-virtual-list';

interface Iprops {
  loadMore: any;
  data: any;
  containerHeight: number;
  loading: boolean;
  setCurrent: any;
  currentID: number;
}

const CardList = ({
  loadMore,
  data,
  containerHeight,
  loading,
  setCurrent,
  currentID,
}: Iprops) => {
  const onScroll = (e: any) => {
    if (e.target.scrollHeight - e.target.scrollTop === containerHeight) {
      loadMore();
    }
  };

  return (
    <>
      <div>
        <Card style={{ width: 300 }} loading={loading}>
          <div className="gradient-first"></div>
          <div className="gradient-second"></div>
          <div className="gradient-third"></div>
          <List>
            <VirtualList
              data={data}
              height={containerHeight}
              itemHeight={47}
              itemKey="id"
              onScroll={onScroll}
            >
              {(item) => (
                <List.Item
                  key={item.id}
                  onClick={() => {
                    setCurrent(item.id);
                  }}
                >
                  <Avatar className={currentID === item.id ? `bg-1` : 'bg-4'}>
                    {item.name.split('')[0]}
                  </Avatar>
                  <List.Item.Meta
                    title={<p>{item.nameid}</p>}
                    description={`USD: ${item.price_usd}`}
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
