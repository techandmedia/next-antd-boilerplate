import { useState, useContext, useEffect, Children } from "react";
import { UserContext, MenuContext } from "context/Global-Context";
import { Layout, Row, Col, Menu, Icon } from "antd";
// import { Header } from "./header";
import { SideMenu } from "./sider";
import { CustomForm } from "components";
import { subMenu, homeMenu } from "../../modules";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function CustomLayout(props) {
  const { dispatchMenu } = useContext(MenuContext);
  // const { user } = useContext(UserContext);
  let { isLoggedIn, currentRoute, logout } = props;
  const route = isLoggedIn && currentRoute === "/dashboard" ? true : false;

  // const fullName = "Andri";
  // // const fullName = route && user.detail[0].user_full_name;
  // // const groupName = route && user.detail[0].group_name;
  // const groupName = "Admin";
  const [collapsed, setCollapsed] = useState(false);
  const [collClick, setCollClick] = useState(!collapsed);

  // function toggleCollapsed(forceCollapse) {
  //   if (forceCollapse === "forced") {
  //     const currentColl = collClick;
  //     setCollClick(!currentColl);
  //   }
  //   const currentCollapsed = collapsed;
  //   setCollapsed(!currentCollapsed);
  // }

  // const loginFams = ["/login", "/register", "/"];
  // const theContent = loginFams.includes(currentRoute)
  //   ? loginLayout
  //   : logedLayout;

  useEffect(() => {
    console.log(currentRoute);
    console.log(isLoggedIn);
  });

  const renderMenu = route
    ? subMenu.map(item => {
        return (
          <SubMenu key={item.key} title={item.title}>
            {item.children.map(el => (
              <Menu.Item key={el.key}>
                <span>{el.title}</span>
              </Menu.Item>
            ))}
          </SubMenu>
        );
      })
    : homeMenu.map(item => (
        <Menu.Item key={item.key}>
          <span>{item.title}</span>
        </Menu.Item>
      ));

  function handleMenuClick({ key }) {
    console.log("SIDEBAR", key);
    dispatchMenu({ key });
  }

  return (
    <Layout style={{ height: "100vh" }}>
      {/* {route && ( */}
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
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          onClick={handleMenuClick}
        >
          {renderMenu}
        </Menu>
      </Sider>
      ){/* } */}
      <ChildrenLayout route={route} {...props} />
    </Layout>
  );
}

function ChildrenLayout(props) {
  console.log(props.route);
  return props.route ? (
    <DashboardLayout {...props} />
  ) : (
    <HomeLayout {...props} />
  );
}

/**
 * Route: home, login, registrasi
 */
function HomeLayout(props) {
  return (
    <Layout style={{ width: "100vw", height: "100vh" }} className="login-bg">
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "100%" }}
      >
        <div style={{ width: "auto" }}>
          <Col span={24}>
            <Content
              style={{
                overflow: "initial",
                borderRadius: "4px",
                boxShadow: "0px 0px 20px 6px #00000038"
              }}
            >
              <CustomForm currentRoute={props.currentRoute}>
                {props.children}
              </CustomForm>
            </Content>
          </Col>
        </div>
      </Row>
    </Layout>
  );
}

/**
 * Setelah Berhasil Log In
 */
function DashboardLayout(props) {
  return (
    <Layout
    // className={`content ${props.collapsed ? "minimize" : ""}`}
    // style={props.route ? { marginLeft: 260 } : null}
    >
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
    </Layout>
  );
}
