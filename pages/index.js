// import { useContext } from 'react';
// import { UserContext, MenuContext } from 'context/Global-Context';
import { Row, Col } from 'antd';
import LandingPage from '../modules/landing-page';
// import Modules, { DashboardModules, HomeModules } from '../modules';

function Home(props) {
  // const { menu } = useContext(MenuContext);
  // const { user } = useContext(UserContext);
  // const modulesToRender = user.isLoggedIn ? DashboardModules : HomeModules;

  // function renderPage() {
  //   for (let i = 0; i < modulesToRender.length; i++) {
  //     if (modulesToRender[i].key === menu.menu) {
  //       return <React.Fragment>{modulesToRender[i].component}</React.Fragment>;
  //     }
  //   }
  // }

  // // console.log(process.env.DB_HOST)

  return (
    // <Row type="flex" justify="center">
    //   <Col span={24}>
    <LandingPage />
    //   </Col>
    // </Row>
  );
}

export default Home;
