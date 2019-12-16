import { useContext } from "react";
import { MenuContext } from "context/Global-Context";
import { Row, Col, Menu } from "antd";
import { HomeMenu } from "../../modules";

export default function(props) {
  const { dispatchMenu } = useContext(MenuContext);

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
            <div style={{ marginRight: -1 }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["default"]}
                onClick={handleMenuClick}
              >
                {HomeMenu.map(item => {
                  return (
                    <Menu.Item key={item.key}>
                      <div>{item.title}</div>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </div>
          </div>
        </Col>
        <Col
          xs={{ span: 8, offset: 8 }}
          md={{ span: 18, offset: 3 }}
          lg={{ span: 10, offset: 0 }}
          className="content-white-section"
          style={{ backgroundColor: "#fff", minHeight: "30rem", padding: 36 }}
        >
          <Col
            xs={24}
            md={24}
            lg={0}
            style={{ textAlign: "-webkit-center", marginBottom: "2rem" }}
          >
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
