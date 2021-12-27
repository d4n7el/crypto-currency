import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  AreaChartOutlined,
  PlusOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Image } from 'antd';

const MenuApp = () => {
  const [current, setCurrent] = useState<string>('');
  return (
    <Menu
      onClick={(e) => {
        setCurrent(e.key);
      }}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item key="item-bussiness">Crypto</Menu.Item>
      <Menu.Item key="item-charts" icon={<AreaChartOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="item-two" icon={<PlusOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.Item key="item-logout" icon={<LogoutOutlined />}>
        Navigation three
      </Menu.Item>
    </Menu>
  );
};

export default MenuApp;
