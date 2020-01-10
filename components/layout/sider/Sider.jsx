import { useContext, useState } from "react";
import { MenuContext } from "context/Global-Context";
import { Layout, Menu, Icon } from "antd";

import { subMenu } from "../../../modules/";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SideMenu({ collapsed, toggleCollapsed, collClick }) {
  const { dispatchMenu } = useContext(MenuContext);

  function handleMenuClick(e) {
    console.log("SIDEBAR", e);
    dispatchMenu({ key: e.key });
  }
  const logo = {
    height: 32,
    background: "rgba(255, 255, 255, 0.2)",
    margin: 16
  };

  return (
    <Sider
      collapsible
      trigger={null}
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      onMouseEnter={!collClick ? toggleCollapsed : null}
      onMouseLeave={!collClick ? toggleCollapsed : null}
    >
      <div style={logo}></div>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["default"]}
        // defaultOpenKeys={["sub-menu-1"]}
        style={{ backgroundColor: "initial" }}
        // inlineCollapsed={collapsed}
      >
        {subMenu.map(item => {
          return (
            <SubMenu
              key={item.key}
              title={item.title}
              onClick={item.children ? false : handleMenuClick}
            >
              {item.children.map(el => (
                <Menu.Item key={el.key} onClick={handleMenuClick}>
                  <span>{el.title}</span>
                </Menu.Item>
              ))}
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
}
