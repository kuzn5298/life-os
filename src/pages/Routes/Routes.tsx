import React, { Suspense } from 'react';

import { AuthRouteObject } from 'types';
import { useAuthRoutes } from 'hooks';

export interface IRoutesProps {
    routes: AuthRouteObject[];
}

const Routes: React.FC<IRoutesProps> = ({ routes = [] }) => {
    const elements = useAuthRoutes(routes);
    return <Suspense fallback={<div>loading...</div>}>{elements}</Suspense>;
};

export default Routes;
