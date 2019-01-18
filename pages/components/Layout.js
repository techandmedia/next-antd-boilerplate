import { Layout, Menu, Icon } from "antd";
import PageHeader from "./header";

const { Header, Content, Footer, Sider } = Layout;

import Link from "next/link";

export default function MainLayout(props) {
  console.log(props);
  return (
    <Layout
      // style={{
      //   // overflow: "auto",
      //   height: "100vh"
      //   // position: "fixed",
      //   // left: 0
      // }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Icon type="user" />
            <Link href="/">
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <Link href="/about">
              <span className="nav-text">About</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <Link href="/contact">
              <span className="nav-text">Contact</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          {/* {props.message} */}
          <PageHeader />
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 460,
              overflow: "initial"
            }}
          >
            {props.content}
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
