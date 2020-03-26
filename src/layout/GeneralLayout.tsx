import React from 'react';
import TopMenu from "@/pages/pages/TopMenu";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default ({children}) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <TopMenu/>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>

        <div className="site-layout-content">{children}</div>

      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}
