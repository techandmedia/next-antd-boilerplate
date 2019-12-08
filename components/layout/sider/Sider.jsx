import { useContext, useState } from "react";
import { MenuContext } from "context/Global-Context";
import { Layout, Menu, Icon } from "antd";

import { subMenu } from "../../../modules/";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SideMenu({ collapsed, toggleCollapsed }) {
  const { dispatchMenu } = useContext(MenuContext);

  function handleMenuClick(e) {
    console.log("SIDEBAR", e);
    dispatchMenu({ key: e.key });
  }

  const logo ={
    "height": 32,
    "background": "rgba(255, 255, 255, 0.2)",
    "margin": 16,
  }
  
  return (
    <Sider
      collapsible
      trigger={null}
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div style={logo} />
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["default"]}
        // defaultOpenKeys={["sub-menu-1"]}
        // style={{ height: "100%" }}
        // onClick={handleMenuClick}
        // inlineCollapsed={collapsed}
      >
        {subMenu.map(item => {
          return (
            <SubMenu key={item.key} title={item.title}>
            <span>
              {item.children.map(el => (
                <Menu.Item key={el.key}>
                  <Icon type={el.icon} />
                  <span>{el.title}</span>
                </Menu.Item>
              ))}</span>
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
}
