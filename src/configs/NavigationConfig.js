import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const menuNavTree = [
  {
    key: "home",
    title: "Home",
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "home",
        path: `${APP_PREFIX_PATH}/home`,
        title: "Estatísticas",

        breadcrumb: false,
        submenu: [],
      },
      {
        key: "games-search",
        path: `${APP_PREFIX_PATH}/games/search`,
        title: "Buscar Jogos",

        breadcrumb: false,
        submenu: [],
      },


    ],
  },

  {
    key: "home",

    title: "Meus Jogos",
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "games-finished",
        path: `${APP_PREFIX_PATH}/games/finished`,
        title: "Zerados",

        breadcrumb: false,
        submenu: [],
      },
      {
        key: "games-favorites",
        path: `${APP_PREFIX_PATH}/games/favorites`,
        title: "Favoritos",

        breadcrumb: false,
        submenu: [],
      },
      {
        key: "games-backlog",
        path: `${APP_PREFIX_PATH}/games/backlog`,
        title: "Backlog",

        breadcrumb: false,
        submenu: [],
      },

    ],
  },
];

const debugNavTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "Debug",
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [

      {
        key: "games-list",
        path: `${APP_PREFIX_PATH}/games/list`,
        title: "Games List",

        breadcrumb: false,
        submenu: [],
      },

      {
        key: "games-grid",
        path: `${APP_PREFIX_PATH}/games/grid`,
        title: "Games Grid",

        breadcrumb: false,
        submenu: [],
      },

      {
        key: "game-profile",
        path: `${APP_PREFIX_PATH}/games/profile`,
        title: "Game Profile",

        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];


const navigationConfig = [
  ...menuNavTree, 
  ...debugNavTree
];

export default navigationConfig;
