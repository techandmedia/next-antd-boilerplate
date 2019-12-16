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
  },
  {
    key: "status",
    title: "cek status",
    component: <h1>UNDER CONSTRUCTION</h1>
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
  },
  {
    key: "sub-menu-4",
    title: (
      <span>
        <Icon type="notification" />
        <span>master data</span>
      </span>
    ),
    children: [
      {
        key: "master-pusat",
        title: "master pusat"
      },
      {
        key: "akademik",
        title: "akademik"
      },
      {
        key: "civitas",
        title: "civitas"
      }
    ]
  },
  {
    key: "sub-menu-5",
    title: (
      <span>
        <Icon type="notification" />
        <span>pmb online</span>
      </span>
    ),
    children: [
      {
        key: "konfigurasi",
        title: "konfigurasi"
      },
      {
        key: "maba",
        title: "maba"
      }
    ]
  },
  {
    key: "sub-menu-5",
    title: (
      <span>
        <Icon type="notification" />
        <span>akademika</span>
      </span>
    ),
    children: [
      {
        key: "tahun-akademik",
        title: "tahun akademik"
      },
      {
        key: "status-mahasiswa",
        title: "status mahasiswa"
      },
      {
        key: "perkuliahan",
        title: "Perkuliahan"
      },
      {
        key: "krs",
        title: "KRS"
      },
      {
        key: "tugas-akhir",
        title: "Tugas Akhir"
      },
      {
        key: "penilaian",
        title: "Penilaian"
      },
      {
        key: "hasil-studi",
        title: "Hasil Studi"
      },
      {
        key: "wisuda",
        title: "Wisuda"
      },
      {
        key: "quesiner",
        title: "Quesiner"
      },
      {
        key: "evaluasi-dosen-mengajar",
        title: "Evaluasi Dosen Mengajar"
      }
    ]
  },
  {
    key: "sub-menu-6",
    title: (
      <span>
        <Icon type="notification" />
        <span>Keuangan</span>
      </span>
    ),
    children: [
      {
        key: "saldo-awal",
        title: "Saldo Awal"
      },
      {
        key: "keuangan-mahasiswa",
        title: "Keuangan Mahasiswa"
      },
      {
        key: "kode-akun",
        title: "Kode Akun"
      },
      {
        key: "rencana-anggaran",
        title: "Rencana Anggaran"
      },
      {
        key: "jurnal",
        title: "Jurnal"
      },
      {
        key: "buku-besar",
        title: "Buku Besar"
      },
      {
        key: "neraca-saldo",
        title: "Neraca Saldo"
      },
      {
        key: "laporan",
        title: "Laporan"
      }
    ]
  },
  {
    key: "sub-menu-7",
    title: (
      <span>
        <Icon type="notification" />
        <span>Grafik View</span>
      </span>
    ),
    children: [
      {
        key: "presensi",
        title: "Presensi"
      },
      {
        key: "pmb",
        title: "PMB"
      },
      {
        key: "mahasiswa",
        title: "Mahasiswa"
      },
      {
        key: "ip-semester",
        title: "IP Semester"
      }
    ]
  },
  {
    key: "sub-menu-8",
    title: (
      <span>
        <Icon type="notification" />
        <span>Forlap Dikti</span>
      </span>
    ),
    children: [
      {
        key: "feeder-dikti",
        title: "Feeder Dikti"
      },
      {
        key: "feeder-ke-siakad",
        title: "Feeder ke Siakad"
      }
    ]
  },
  {
    key: "sub-menu-9",
    title: (
      <span>
        <Icon type="notification" />
        <span>Perpustakaan</span>
      </span>
    ),
    children: [
      {
        key: "setting",
        title: "Setting"
      },
      {
        key: "anggota",
        title: "Anggota"
      },
      {
        key: "pustaka",
        title: "Pustaka"
      },
      {
        key: "sirkulasi",
        title: "Sirkulasi"
      },
      {
        key: "laporan",
        title: "Laporan"
      }
    ]
  },
  {
    key: "sub-menu-10",
    title: (
      <span>
        <Icon type="notification" />
        <span>Konfigurasi</span>
      </span>
    ),
    children: [
      {
        key: "pengaturan-modul",
        title: "Pengaturan Modul"
      },
      {
        key: "backup-restore",
        title: "Backup & Restore"
      }
    ]
  },
  {
    key: "sub-menu-11",
    title: (
      <span>
        <Icon type="notification" />
        <span>Inventory</span>
      </span>
    ),
    children: [
      {
        key: "data-utama",
        title: "Data Utama"
      },
      {
        key: "transaksi",
        title: "Transaksi"
      },
      {
        key: "Laporan",
        title: "Laporan"
      }
    ]
  },
  {
    key: "sub-menu-12",
    title: (
      <span>
        <Icon type="notification" />
        <span>Akun Saya</span>
      </span>
    )
  },
  {
    key: "sub-menu-13",
    title: (
      <span>
        <Icon type="notification" />
        <span>Edit Profile</span>
      </span>
    )
  },
  {
    key: "sub-menu-14",
    title: (
      <span>
        <Icon type="notification" />
        <span>Edit Avatar</span>
      </span>
    )
  },
  {
    key: "sub-menu-15",
    title: (
      <span>
        <Icon type="notification" />
        <span>Edit Password</span>
      </span>
    )
  },
  {
    key: "sub-menu-16",
    title: (
      <span>
        <Icon type="notification" />
        <span>Logout</span>
      </span>
    )
  }
];

const Modules = [...additional_Modules];
const DashboardModules = [...additional_Modules];
const HomeModules = [...additional_Modules];

DashboardMenu.forEach(item => {
  if (item.children !== undefined) {
    item.children.forEach(el => {
      Modules.push({ key: el.key, component: el.component });
      DashboardModules.push({ key: el.key, component: el.component });
    });
  } else {
    Modules.push({ key: item.key, component: item.component });
    DashboardModules.push({ key: item.key, component: item.component });
  }
});

HomeMenu.forEach(item => {
  Modules.push({ key: item.key, component: item.component });
  HomeModules.push({ key: item.key, component: item.component });
});

export { DashboardMenu, DashboardModules, HomeMenu, HomeModules };
export default Modules;
