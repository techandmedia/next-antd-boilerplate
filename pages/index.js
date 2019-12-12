import { useContext } from "react";
import { MenuContext } from "context/Global-Context";
import { Row, Col } from "antd";
import Modules, { HomePages } from "../modules";

export default function Home(props) {
  const { menu } = useContext(MenuContext);
  // const pageToRender = props.isLoggedIn ? DashboardPages : HomePages;

  function renderPage() {
    for (let i = 0; i < Modules.length; i++) {
      if (Modules[i].key === menu.menu) {
        console.log("FROM", Modules[i].key);
        console.log("FROM", menu.menu);
        return <React.Fragment>{Modules[i].component}</React.Fragment>;
      }
    }
  }

  return (
    <Row type="flex" justify="center" style={{ paddingRight: 50 }}>
      <Col span={24}>
        {renderPage()}
        {/* Ini dilakukan jika menggunakan landing page */}
        {/* {props.isLoggedIn ? : HomePages[0].component} */}
      </Col>
    </Row>
  );
}
