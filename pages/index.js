import { useContext } from "react";
import { UserContext, MenuContext } from "context/Global-Context";
import { Row, Col } from "antd";
import Modules, { DashboardModules, HomeModules } from "../modules";

export default function Home(props) {
  const { menu } = useContext(MenuContext);
  const { user } = useContext(UserContext);
  const modulesToRender = user.isLoggedIn ? DashboardModules : HomeModules;

  console.log(modulesToRender, user);

  function renderPage() {
    for (let i = 0; i < modulesToRender.length; i++) {
      if (modulesToRender[i].key === menu.menu) {
        return <React.Fragment>{modulesToRender[i].component}</React.Fragment>;
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
