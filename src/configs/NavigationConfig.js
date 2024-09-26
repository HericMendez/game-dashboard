import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const menuNavTree = [
  {
    key: "home",
    title: "Meu perfil",
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
        breadcrumb: false,
        key: "games-list",
        path: `/`,
        title: "Meus Jogos",

        breadcrumb: false,
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

      {
        key: "games-search",
        path: `/`,
        title: "Buscar Jogos",

        breadcrumb: false,
        submenu: [
          {
            key: "games-by-title",
            path: `/`,
            title: "Títulos",

            breadcrumb: false,
            submenu: [],
          },
          {
            key: "games-by-companies",
            path: `/`,
            title: "Empresas",

            breadcrumb: false,
            submenu: [],
          },
          {
            key: "games-by-genres",
            path: `/`,
            title: "Gêneros",

            breadcrumb: false,
            submenu: [],
          },
          {
            key: "games-by-platforms",
            path: `/`,
            title: "Plataformas",

            breadcrumb: false,
            submenu: [],
          },
          {
            key: "games-by-release-year",
            path: `/`,
            title: "Ano de Lançamento",

            breadcrumb: false,
            submenu: [],
          },
          {
            key: "games-by-franchises",
            path: `/`,
            title: "Franquias",

            breadcrumb: false,
            submenu: [],
          },
        ],
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
        path: `${APP_PREFIX_PATH}/`,
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
