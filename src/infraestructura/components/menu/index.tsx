import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  AreaChartOutlined,
  PlusOutlined,
  LogoutOutlined,
  SettingOutlined,
  CheckOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import Translate from '../translate';
import { UseLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const MenuApp = () => {
  const { setCurrentLanguage, language } = UseLanguage();

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
        <Link className="ant-menu-title-content" to={'/'}>
          {Translate('home', false)}
        </Link>
      </Menu.Item>
      <Menu.Item key="item-two" icon={<PlusOutlined />}>
        <Link className="ant-menu-title-content" to={'/'}>
          {Translate('nav-link-2', false)}
        </Link>
      </Menu.Item>
      <Menu.Item key="item-logout" icon={<LogoutOutlined />}>
        <Link className="ant-menu-title-content" to={'/nav-link-3'}>
          {Translate('nav-link-3', false)}
        </Link>
      </Menu.Item>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title={Translate('language', false)}
      >
        <Menu.ItemGroup title={Translate('language', false)}>
          <Menu.Item
            icon={language === 'en' ? <CheckOutlined /> : <MinusOutlined />}
            key="en"
            onClick={() => {
              setCurrentLanguage('en');
            }}
          >
            Ingles
          </Menu.Item>
          <Menu.Item
            icon={language === 'es' ? <CheckOutlined /> : <MinusOutlined />}
            key="es"
            onClick={() => {
              setCurrentLanguage('es');
            }}
          >
            Español
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default MenuApp;
