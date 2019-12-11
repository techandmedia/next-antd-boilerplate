import { useState, useContext } from "react";
import { UserContext } from "context/Global-Context";
import { Layout, Row, Col } from "antd";
import { Header } from "./header";
import { SideMenu } from "./sider";
const { Content, Footer } = Layout;
import { CustomForm } from "components";

export default function CustomLayout(props) {
  const { user } = useContext(UserContext);
  let { isLoggedIn, currentRoute, logout } = props;
  const route = isLoggedIn && currentRoute === "/dashboard" ? true : false;
  const fullName = "Andri";
  // const fullName = route && user.detail[0].user_full_name;
  // const groupName = route && user.detail[0].group_name;
  const groupName = "Admin";
  const [collapsed, setCollapsed] = useState(false);
  const [collClick, setCollClick] = useState(!collapsed);

  function toggleCollapsed(forceCollapse) {
    if (forceCollapse === "forced") {
      const currentColl = collClick;
      setCollClick(!currentColl);
    }
    const currentCollapsed = collapsed;
    setCollapsed(!currentCollapsed);
  }

  const logedLayout = (
    <Layout
      className={`content ${collapsed ? "minimize" : ""}`}
      style={route ? { marginLeft: 260 } : null}
    >
      <Header
        route={route}
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
  );

  const loginLayout = (
    <Layout style={{ width: "100vw", height: "100vh" }} className="login-bg">
      <Content
        style={{
          margin: "15vh 20vw",
          overflow: "initial",
          borderRadius: "4px",
          height: "70vh",
          width: "60vw",
          boxShadow: "0px 0px 20px 6px #00000038"
        }}
      >
        <CustomForm currentRoute={props.currentRoute}>
          {props.children}
        </CustomForm>
      </Content>
    </Layout>
  );

  const loginFams = ["/login", "/register", "/"];
  const theContent = loginFams.includes(currentRoute)
    ? loginLayout
    : logedLayout;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {route && (
        <SideMenu
          collapsed={collapsed}
          toggleCollapsed={toggleCollapsed}
          collClick={collClick}
        />
      )}
      {theContent}
    </Layout>
  );
}
