import { Icon } from "antd";
import Default from "./default";
import Profile from "./profile/";
import UserList from "./user-list";
import LoginFailed from "./login-failed";
import Login from "../pages/login";
import Register from "../pages/register";

// DEMO
import DaftarDosen from "./daftar-dosen";

/**
 * Additional Pages is for pages that do not have menu but usefull like
 * error page, login failed pages, etc
 */
const additional_pages = [
  {
    key: "login-failed",
    component: <LoginFailed />
  }
];

const homeMenu = [
  {
    key: "default",
    title: "menu",
    component: <h1>SISTEM INFORMASI AKADEMIK</h1>
  },
  {
    key: "login",
    title: "login",
    component: <Login />
  },
  {
    key: "register",
    title: "register",
    component: <Register />
  }
];

const subMenu = [
  {
    key: "sub-menu-1",
    title: (
      <span>
        <Icon type="user" />
        <span>Your Dashboard</span>
      </span>
    ),
    children: [
      {
        key: "default",
        title: "Tasks List",
        component: <Default />
      },
      {
        key: "user-list",
        title: "User List",
        component: <UserList />
      },
      {
        key: "work-list",
        title: "Work List"
      }
    ]
  },
  {
    key: "sub-menu-2",
    title: (
      <span>
        <Icon type="laptop" />
        <span>Tambahan</span>
      </span>
    ),
    children: [
      {
        key: "dosen",
        title: (
          <span>
            <span>Daftar Dosen</span>
          </span>
        ),
        component: <DaftarDosen />
      },
      {
        key: "user-list",
        title: (
          <span>
            <span>User List</span>
          </span>
        ),
        component: <UserList />
      },
      {
        key: "22",
        title: (
          <span>
            <span>Work List</span>
          </span>
        )
      }
    ]
  },
  {
    key: "sub-menu-3",
    title: (
      <span>
        <Icon type="notification" />
        <span>User Profile</span>
      </span>
    ),
    children: [
      {
        key: "profile",
        title: "Profile",
        component: <Profile />
      },
      {
        key: "preference",
        title: "Preference"
      },
      {
        key: "change-password",
        title: "Change Password"
      }
    ]
  }
];

const pages = [...additional_pages];

subMenu.forEach(item => {
  item.children.forEach(el =>
    pages.push({ key: el.key, component: el.component })
  );
});

export { subMenu, homeMenu };
export default pages;
