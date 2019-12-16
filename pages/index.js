import { useContext } from "react";
import { MenuContext } from "context/Global-Context";
import { Row, Col } from "antd";
import Modules from "../modules";

export default function Home(props) {
  const { menu } = useContext(MenuContext);

  
  // console.log(process.env);

  function renderPage() {
    for (let i = 0; i < Modules.length; i++) {
      if (Modules[i].key === menu.menu) {
        return <React.Fragment>{Modules[i].component}</React.Fragment>;
      }
    }
  }

  return (
    <Row type="flex" justify="center">
      <Col span={24}>
        {renderPage()}
        {/* Ini dilakukan jika menggunakan landing page */}
        {/* {props.isLoggedIn ? : HomePages[0].component} */}
      </Col>
    </Row>
  );
}
