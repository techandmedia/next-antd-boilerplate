import Link from "next/link";
import { Row, Col } from "antd";

export default function(props) {
  const list = [
    {
      name: "menu"
    },
    {
      name: "login"
    },
    {
      name: "register"
    }
  ];

  let name;

  return (
    <div style={{ height: "inherit" }} className="login-bg">
      <Row style={{ height: "inherit" }}>
        <Col sm={0} md={0} lg={14}>
          <div
            style={{
              width: "fit-content",
              padding: "20px 0 3px 0",
              float: "right"
            }}
          >
            <ul>
              {list.map(i => {
                name = i.name === "menu" ? "" : i.name;

                return (
                  <li
                    key={i.name}
                    style={{
                      letterSpacing: 1.5,
                      padding:
                        props.currentRoute === "/" + name
                          ? "10px 40px 10px 20px"
                          : "10px 33px 10px 27px",
                      cursor: "pointer",
                      borderRadius: "14px 0 0 14px",
                      fontSize: props.currentRoute === "/" + name ? 14 : 12,
                      textTransform: "uppercase",
                      boxShadow:
                        props.currentRoute === "/" + name
                          ? "#000000a8 0px 3px 10px 0px"
                          : "none",
                      background:
                        props.currentRoute === "/" + name
                          ? "white"
                          : "transparent"
                    }}
                  >
                    <Link href={`${"/" + name}`}>
                      <a
                        style={{
                          color:
                            props.currentRoute === "/" + name
                              ? "black"
                              : "white"
                        }}
                      >
                        {i.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col
          sm={24}
          md={24}
          lg={10}
          style={{ backgroundColor: "#fff", height: "100%", padding: 36 }}
        >
          <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{ height: "inherit" }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                background: "blue",
                position: "absolute",
                top: 20,
                right: 20,
                color: "white",
                fontWeight: "bold",
                padding: "30px 20px"
              }}
            >
              LOGO
            </div>
            <Col>{props.children}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
