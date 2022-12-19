import React from 'react';

import { Login, Verification } from 'pages';
import { AuthRouteObject } from 'types';
import { AppRouteEnum } from 'constpack';

const AUTH_ROUTES: AuthRouteObject[] = [
    {
        path: AppRouteEnum.LOGIN,
        element: <Login />,
    },
    {
        path: AppRouteEnum.VERIFICATION,
        element: <Verification />,
    },
];

export default AUTH_ROUTES;
