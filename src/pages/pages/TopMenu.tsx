import React from 'react';
import { Link } from 'umi';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export default () => {
  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/about'>About</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/user'>User</Link></Menu.Item>
      </Menu>
    </div>
  );
}
