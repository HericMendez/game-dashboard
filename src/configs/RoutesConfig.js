import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'page.home',
        path: `${APP_PREFIX_PATH}/home`,
        component: React.lazy(() => import('views/app-views/Home')),
    },

    {
        key: 'games.list',
        path: `${APP_PREFIX_PATH}/games/list`,
        component: React.lazy(() => import('components/shared-components/CustomTable')),
    },
    
    {
        key: 'games.grid',
        path: `${APP_PREFIX_PATH}/games/grid`,
        component: React.lazy(() => import('components/shared-components/ListGridTable')),
    },

    {
        key: 'games.profile',
        path: `${APP_PREFIX_PATH}/games/profile`,
        component: React.lazy(() => import('components/shared-components/GameProfile')),
    },

    {
        key: 'games.favorites',
        path: `${APP_PREFIX_PATH}/games/favorites`,
        component: React.lazy(() => import('views/app-views/Favorites')),
    },

    {
        key: 'games.backlog',
        path: `${APP_PREFIX_PATH}/games/backlog`,
        component: React.lazy(() => import('views/app-views/Backlog')),
    },

    {
        key: 'games.search',
        path: `${APP_PREFIX_PATH}/games/search`,
        component: React.lazy(() => import('views/app-views/GameSearch')),
    },

    {
        key: 'games.finished',
        path: `${APP_PREFIX_PATH}/games/finished`,
        component: React.lazy(() => import('views/app-views/Finished')),
    },
]