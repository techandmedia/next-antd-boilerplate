import { useState, useContext } from "react";
import { UserContext, MenuContext } from "context/Global-Context";
import { Layout, Row, Col, Menu, Icon } from "antd";
import { CustomForm } from "components";
import { DashboardMenu, HomeMenu } from "../../modules";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function CustomLayout(props) {
  const { dispatchMenu } = useContext(MenuContext);
  const { user } = useContext(UserContext);
  const [collapsed, setCollapsed] = useState(false);
  const [onBreakpoint, setBreakPoint] = useState(null);

  function toggleCollapsed() {
    const varCollapsed = collapsed;
    setCollapsed(!varCollapsed);
  }

  function handleMenuClick({ key }) {
    // console.log("SIDEBAR", key);
    dispatchMenu({ key });
  }

  console.log("Layout", user);

  return (
    <Layout style={{ height: "100vh" }}>
      <ChildrenLayout
        onBreakpoint={onBreakpoint}
        setBreakPoint={setBreakPoint}
        handleMenuClick={handleMenuClick}
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
        user={user}
        {...props}
      />
    </Layout>
  );
}

function ChildrenLayout(props) {
  const { user } = props;

  if (user.isLoggedIn) {
    return <DashboardLayout {...props} />;
  }

  return <HomeLayout {...props} />;
}

/**
 * Route: home, login, registrasi
 */
function HomeLayout(props) {
  return (
    <React.Fragment>
      <div style={{ display: props.onBreakpoint ? "block" : "none" }}>
        <Sider
          style={{ height: "100vh" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            props.setBreakPoint(broken);
          }}
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["default"]}
            onClick={props.handleMenuClick}
          >
            {HomeMenu.map(item => (
              <Menu.Item key={item.key}>
                <span>{item.title}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
      </div>
      <Layout
        style={{ width: "100vw", height: "100vh" }}
        className="home login-bg"
      >
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: "100%" }}
        >
          <div style={{ width: "auto" }}>
            <Col span={24}>
              <Content
                className="content-home-section"
                style={{
                  overflow: "initial",
                  borderRadius: "4px",
                  minWidth: "60rem"
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
    </React.Fragment>
  );
}

/**
 * Setelah Berhasil Log In
 */
function DashboardLayout(props) {
  const logo = {
    height: 32,
    background: "rgba(255, 255, 255, 0.2)",
    margin: 16,
    position: "relative"
  };
  return (
    <Layout className="dashboard">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsed={props.collapsed}
        onClick={props.collapsed ? props.toggleCollapsed : null}
        // onCollapse={props.toggleCollapsed}
      >
        <div
          className={props.collapsed ? "trigger collapsed" : "trigger"}
          onClick={props.toggleCollapsed}
        />
        <div style={logo} />
        <Menu
          mode="inline"
          defaultSelectedKeys={["task-list"]}
          onClick={props.handleMenuClick}
        >
          {DashboardMenu.map(item => {
            return (
              <SubMenu key={item.key} title={item.title}>
                {item.children.map(el => (
                  <Menu.Item key={el.key}>
                    <span>{el.title}</span>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          })}
        </Menu>
      </Sider>
      <Content
        className={props.collapsed ? "collapsed" : ""}
        style={{
          // margin: "24px 16px 0",
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
