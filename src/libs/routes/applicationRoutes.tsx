import React from 'react';
import { Navigate } from 'react-router-dom';

import { NotFound, MainLayout, AuthLayout } from 'pages';
import { AppRouteEnum } from 'constpack';
import { AuthRouteObject } from 'types';

import AUTH_ROUTES from './authRoutes';
import MAIN_ROUTES from './mainRoutes';

const APPLICATION_ROUTES: AuthRouteObject[] = [
    {
        element: <AuthLayout />,
        children: AUTH_ROUTES,
        forGuest: true,
    },
    {
        element: <MainLayout />,
        children: MAIN_ROUTES,
        forAuth: true,
    },

    {
        path: AppRouteEnum.NOT_FOUND,
        element: <NotFound />,
    },
    {
        path: AppRouteEnum.ANY,
        element: <Navigate to={AppRouteEnum.NOT_FOUND} />,
    },
];

export default APPLICATION_ROUTES;
