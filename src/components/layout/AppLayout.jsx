import { Breadcrumb, Layout, Menu, theme, FloatButton } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    PlusOutlined,
  } from '@ant-design/icons';
import { useState } from 'react';
import TasksPage from '../TasksPage';
import { Link, Route, Routes } from 'react-router';
import Websites from '../../pages/Websites';


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('Задачи', '1', <Link to="/"><PieChartOutlined /></Link> ),
    getItem('Вебсайты', '2',<Link to="/websites"><DesktopOutlined /></Link>),,

  ];

export default function AppLayout({children}) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
      <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
       >
        
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark"  mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header
            style={{
              paddingLeft: 18,
              background: colorBgContainer,
              content: 'Задачи'
            }}
          ><h1></h1></Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            {/* <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            {/* <TasksPage /> */}
            {children}
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
          </Footer>
        </Layout>
      </Layout>
      </>
    )
}