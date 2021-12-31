import React, { useState } from 'react';
import { List, Avatar, Card } from 'antd';
import VirtualList from 'rc-virtual-list';
import { ICardList } from '../../interface/cardList';

interface Iprops {
  loadMore: any;
  data: ICardList[];
  containerHeight: number;
  loading: boolean;
  setCurrent: any;
  currentID: number;
  viewAvatar: boolean;
}

const CardList = ({
  loadMore,
  data,
  containerHeight,
  loading,
  setCurrent,
  currentID,
  viewAvatar,
}: Iprops) => {
  const onScroll = (e: any) => {
    if (e.target.scrollHeight - e.target.scrollTop === containerHeight) {
      loadMore();
    }
  };

  return (
    <>
      <div>
        <Card loading={loading}>
          <div className="gradient-first"></div>
          <div className="gradient-second"></div>
          <div className="gradient-third"></div>

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
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCurrent(item.id);
                }}
                data-testid={`nameid_${item.title}`}
              >
                {viewAvatar && (
                  <Avatar
                    className={
                      currentID.toString() === item.id ? `bg-1` : 'bg-4'
                    }
                  >
                    {item.avatarLetter}
                  </Avatar>
                )}

                <List.Item.Meta
                  title={<p>{item.title}</p>}
                  description={`USD: ${item.description}`}
                />
              </List.Item>
            )}
          </VirtualList>
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
