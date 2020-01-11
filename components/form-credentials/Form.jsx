import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { MenuContext } from "context/Global-Context";
import { Row, Col, Menu, Affix } from "antd";
import { HomeMenu } from "../../modules";
/**
 * Jangan ditaruh di folder lain selain folder images, nanti bentrok
 * dengan route nya
 */
const image1 =
  "images/login/Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-2.jpg";
const image2 =
  "images/login/Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-6.jpg";
const image3 =
  "images/login/Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-8.jpg";
const image4 =
  "images/login/Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-13.jpg";
const logo = "images/logo-akper.png";

export default function(props) {
  const { dispatchMenu } = useContext(MenuContext);

  function handleMenuClick({ key }) {
    console.log("SIDEBAR", key);
    dispatchMenu({ key });
  }

  // carousel ale - ale
  const [imageActive, setImageActive] = useState(image1);
  const [fadeOut, setFadeOut] = useState(true);
  const images = [image1, image2, image3, image4];
  let x = 0;
  function slide() {
    x = x === images.length - 1 ? 0 : x + 1;
    setFadeOut(true);
    setTimeout(function() {
      setImageActive(images[x]);
      setFadeOut(false);
    }, 500);
  }
  function slideTimer() {
    setInterval(slide, 3000);
  }
  useEffect(() => {
    slideTimer();
  }, []);
  // carousel ale - ale END

  return (
    <Row id="row-content">
      <Col xs={0} md={0} lg={14}>
        <div
          className={`fading ${fadeOut ? "fadeOut" : ""}`}
          style={{
            minHeight: "30rem",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${imageActive})`
          }}
        ></div>
        <div className="login-image-overlay">
          <div
            style={{
              marginRight: -1,
              maxWidth: "10rem",
              float: "right",
              padding: "20px 0 3px"
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["default"]}
              onClick={handleMenuClick}
            >
              {HomeMenu.map(item => {
                return (
                  <Menu.Item key={item.key}>
                    <div style={{ width: "10rem" }}>
                      {/* <Link href={item.key}> */}
                      <a style={{ color: "white" }}>{item.title}</a>
                      {/* </Link> */}
                    </div>
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
        style={{ backgroundColor: "#fff", padding: "1rem 2rem" }}
      >
        <Col
          span={24}
          style={{
            textAlign: "-webkit-center",
            marginBottom: "2rem",
            position: "-webkit-sticky",
            position: "sticky",
            zIndex: 3,
            background: "white",
            padding: ".5rem 0",
            top: "-1rem",
            boxShadow: "0px 3px 4px -4px #0000003b"
          }}
        >
          <img src={logo} style={{ width: "8rem" }} />
        </Col>
        <Col span={24}>{props.children}</Col>
      </Col>
    </Row>
  );
}
