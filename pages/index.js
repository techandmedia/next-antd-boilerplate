import HomeMenu from '../modules/menu/home-menu'
import usePostData from "api/usePostData";

const API = "user/login";

/**
 * Jika menggunakan landing page, maka ganti import nya dengan halaman landing page
 * Karena ini adalah file 'default' index di NextJs
 */

function Menu(props) {
  return <HomeMenu />
};

export default Menu