import { useContext } from "react";
import { MenuContext } from "context/Global-Context";
import { Row, Col } from "antd";
import { homeMenu } from "../modules";

export default function Home(props) {
  const { menu } = useContext(MenuContext);

  function renderPage() {
    for (let i = 0; i < homeMenu.length; i++) {
      if (homeMenu[i].key === menu.menu) {
        return <React.Fragment>{homeMenu[i].component}</React.Fragment>;
      }
    }
  }

  return (
    <Row type="flex" justify="center" style={{ paddingRight: 50 }}>
      <Col span={24}>
        {renderPage()}
        {/* Ini dilakukan jika menggunakan landing page */}
        {/* {props.isLoggedIn ? : homeMenu[0].component} */}
      </Col>
    </Row>
  );
}
