import React from 'react';

import { Home } from 'pages';
import { AuthRouteObject } from 'types';

const MAIN_ROUTES: AuthRouteObject[] = [
    {
        index: true,
        element: <Home />,
    },
];

export default MAIN_ROUTES;
