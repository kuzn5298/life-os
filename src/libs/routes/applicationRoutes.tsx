import React from 'react';
import { Navigate } from 'react-router-dom';

import { NotFound, Login, MainLayout } from 'pages';
import { AppRoutes } from 'constpack';
import { AuthRouteObject } from 'types';

import MAIN_ROUTES from './mainRoutes';

const APPLICATION_ROUTES: AuthRouteObject[] = [
    {
        path: AppRoutes.MAIN,
        element: <MainLayout />,
        children: MAIN_ROUTES,
        forAuth: true,
    },
    {
        path: AppRoutes.LOGIN,
        element: <Login />,
        forGuest: true,
    },
    {
        path: AppRoutes.NOT_FOUND,
        element: <NotFound />,
    },
    {
        path: AppRoutes.ANY,
        element: <Navigate to={AppRoutes.NOT_FOUND} />,
    },
];

export default APPLICATION_ROUTES;
