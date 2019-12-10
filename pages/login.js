import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Form } from "components";
import { Row, Col } from "antd";
const IMAGE_URL = "../static/img/login/";
const image1 = "Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-13.jpg";
const image2 = "Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-2.jpg";
const image3 = "Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-6.jpg";
const image4 = "Ucap-Janji-Akademi-Keperawatan-Bina-Insan-2016-8.jpg";

export default function Login(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const result = await axios("http://localhost:3000/api/credentials/login");
      const res = await result;
      setData(res);
    }

    getData()
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

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

  return (
    <div style={{ height: "inherit" }} className="login-bg">
      <Row style={{ height: "inherit" }}>
        <Col span={14}>
          <div
            style={{
              width: "fit-content",
              padding: "20px 0 3px 0",
              float: "right"
            }}
          >
            <ul>
              {list.map(i => (
                <li
                  key={i.name}
                  style={{
                    letterSpacing: 1.5,
                    padding:
                      props.currentRoute === "/" + i.name
                        ? "10px 40px 10px 20px"
                        : "10px 33px 10px 27px",
                    cursor: "pointer",
                    borderRadius: "14px 0 0 14px",
                    fontSize: props.currentRoute === "/" + i.name ? 14 : 12,
                    textTransform: "uppercase",
                    boxShadow:
                      props.currentRoute === "/" + i.name
                        ? "#000000a8 0px 3px 10px 0px"
                        : "none",
                    background:
                      props.currentRoute === "/" + i.name
                        ? "white"
                        : "transparent"
                  }}
                >
                  <Link href={`${"/" + i.name}}`}>
                    <a
                      style={{
                        color:
                          props.currentRoute === "/" + i.name
                            ? "black"
                            : "white"
                      }}
                    >
                      {" "}
                      {i.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col
          span={10}
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
            <Col>
              <Form loginForm {...props} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
