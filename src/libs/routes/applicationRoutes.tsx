import React from 'react';
import { Navigate } from 'react-router-dom';

import { NotFound, Login, MainLayout } from 'pages';
import { AppRouteEnum } from 'constpack';
import { AuthRouteObject } from 'types';

import MAIN_ROUTES from './mainRoutes';

const APPLICATION_ROUTES: AuthRouteObject[] = [
    {
        path: AppRouteEnum.MAIN,
        element: <MainLayout />,
        children: MAIN_ROUTES,
        forAuth: true,
    },
    {
        path: AppRouteEnum.LOGIN,
        element: <Login />,
        forGuest: true,
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
