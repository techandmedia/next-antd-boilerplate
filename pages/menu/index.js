import HomeMenu from '../../modules/menu/home-menu';
import usePostData from 'api/usePostData';

const API = 'user/login';

function Menu(props) {
  return <HomeMenu />;
}

/**
 * Jika membutuhkan data di awal / sebelum component load
 */
// Login.getInitialProps = async () => {
// const response = await axios("URL")
//   return { response: response,  }
// }

export default Menu;
