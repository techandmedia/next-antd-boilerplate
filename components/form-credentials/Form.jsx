import { useContext } from "react";
import { MenuContext } from "context/Global-Context";
import { Row, Col, Menu } from "antd";
import { homeMenu } from "../../modules";

export default function(props) {
  const { dispatchMenu } = useContext(MenuContext);

  let name, route;
  const [drawer, setDrawer] = React.useState(false);
  const showDrawer = () => {
    setDrawer(true);
  };

  const onClose = () => {
    setDrawer(false);
  };

  function handleMenuClick({ key }) {
    console.log("SIDEBAR", key);
    dispatchMenu({ key });
  }

  return (
    <div className="login-bg">
      <Row id="row-content">
        <Col xs={0} md={0} lg={14}>
          <div
            style={{
              width: "fit-content",
              padding: "20px 0 3px 0",
              float: "right"
            }}
          >
            <ul>
              <Menu
                mode="inline"
                defaultSelectedKeys={["default"]}
                onClick={handleMenuClick}
              >
                {homeMenu.map(i => {
                  name = i.title;
                  route = i.key;

                  return (
                    <Menu.Item
                      key={route}
                      style={
                        {
                          // letterSpacing: 1.5,
                          // padding:
                          //   props.currentRoute === route
                          //     ? "10px 40px 10px 20px"
                          //     : "10px 33px 10px 27px",
                          // cursor: "pointer",
                          // borderRadius: "14px 0 0 14px",
                          // fontSize: props.currentRoute === route ? 14 : 12,
                          // textTransform: "uppercase",
                          // boxShadow:
                          //   props.currentRoute === route
                          //     ? "#000000a8 0px 3px 10px 0px"
                          //     : "none",
                          // background:
                          //   props.currentRoute === route ? "white" : "transparent"
                        }
                      }
                    >
                      <div
                      // style={{
                      //   color:
                      //     props.currentRoute === route
                      //       ? "black"
                      //       : "white"
                      // }}
                      >
                        {name}
                      </div>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </ul>
          </div>
        </Col>
        <Col
          xs={24}
          md={24}
          lg={10}
          style={{ backgroundColor: "#fff", height: "100%", padding: 36 }}
        >
          {/* <Col xs={12} md={12} lg={0} style={{ marginBottom: "3rem" }}> */}
          {/* <Drawer
              getContainer="div#row-content"
              title="Basic Drawer"
              placement="left"
              closable={true}
              onClose={onClose}
              visible={drawer}
              style={{
                position: "absolute"
              }}
              width={"100%"}
            >
              <p>Some contents...</p>
            </Drawer>
            <Button
              style={{ padding: 22, height: "auto" }}
              onClick={showDrawer}
            >
              <Icon type="menu" style={{ fontSize: "2rem" }} />
            </Button> */}
          {/* </Col> */}
          <Col xs={12} md={12} lg={0} style={{ textAlign: "-webkit-right" }}>
            <div
              style={{
                width: 80,
                height: 80,
                background: "blue",
                color: "white",
                fontWeight: "bold",
                padding: "30px 20px"
              }}
            >
              LOGO
            </div>
          </Col>
          <Col span={24}>{props.children}</Col>
        </Col>
      </Row>
    </div>
  );
}
