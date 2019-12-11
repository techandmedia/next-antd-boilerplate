import { useContext } from "react";
import { MenuContext } from "context/Global-Context";
import { Row, Col } from "antd";
import pages from "../modules";

export default function Dashboard(props) {
  const { menu } = useContext(MenuContext);

  function renderPage() {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].key === menu.menu) {
        return <React.Fragment>{pages[i].component}</React.Fragment>;
      }
    }
  }

  return (
    <Row type="flex" justify="center" style={{ paddingRight: 50 }}>
      <Col span={24}>
        {props.isLoggedIn ? renderPage() : pages[0].component}
      </Col>
    </Row>
  );
}
