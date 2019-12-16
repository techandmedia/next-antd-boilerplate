import { Icon } from "antd";
import Default from "./default";
import Profile from "./profile";
import UserList from "./user-list";
import LoginFailed from "./login-failed";
import Login from "./login";
import Register from "./register";

// DEMO
import DaftarDosen from "./daftar-dosen";

/**
 * Additional Modules is for Modules that do not have menu but usefull like
 * error page, login failed Modules, etc
 */
const additional_Modules = [
  {
    key: "login-failed",
    component: <LoginFailed />
  }
];

const HomeMenu = [
  {
    key: "default",
    title: "menu",
    component: <h1>SISTEM INFORMASI AKADEMIK</h1>
  },
  {
    key: "login",
    title: "masuk",
    component: <Login />
  },
  {
    key: "register",
    title: "pendaftaran",
    component: <Register />
  }
];

const DashboardMenu = [
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
        key: "task-list",
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

const Modules = [...additional_Modules];
const DashboardModules = [...additional_Modules];
const HomeModules = [...additional_Modules];

DashboardMenu.forEach(item => {
  item.children.forEach(el => {
    Modules.push({ key: el.key, component: el.component });
    DashboardModules.push({ key: el.key, component: el.component });
  });
});

HomeMenu.forEach(item => {
  Modules.push({ key: item.key, component: item.component });
  HomeModules.push({ key: item.key, component: item.component });
});

export { DashboardMenu, DashboardModules, HomeMenu, HomeModules };
export default Modules;
