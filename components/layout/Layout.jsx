import { useState, useContext } from "react";
import { UserContext } from "context/Global-Context";
import { Layout } from "antd";
import { Header } from "./header";
import { SideMenu } from "./sider";
import "../../utils/style/index.css";
const { Content, Footer } = Layout;

export default function CustomLayout(props) {
  const { user } = useContext(UserContext);
  const { isLoggedIn, currentRoute, logout } = props;
  const route = isLoggedIn && currentRoute === "/dashboard" ? true : false;
  const fullName = "Andri";
  // const fullName = route && user.detail[0].user_full_name;
  // const groupName = route && user.detail[0].group_name;
  const groupName = "Admin";
  const [collapsed, setCollapsed] = useState(true);

  function toggleCollapsed() {
    const currentCollapsed = collapsed;
    setCollapsed(!currentCollapsed);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {route && (
        <SideMenu collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      )}
      <Layout
        className={`content ${collapsed ? "minimize" : ""}`}
        style={{ marginLeft: 200 }}
      >
        <Header
          isLoggedIn={isLoggedIn}
          logout={logout}
          collapsed={collapsed}
          toggleCollapsed={toggleCollapsed}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
