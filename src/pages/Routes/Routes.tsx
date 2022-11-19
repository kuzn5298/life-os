import React, { Suspense } from 'react';

import { Spinner } from 'components';
import { useAuthRoutes } from 'hooks';
import { AuthRouteObject } from 'types';

export interface IRoutesProps {
    routes: AuthRouteObject[];
}

const Routes: React.FC<IRoutesProps> = ({ routes = [] }) => {
    const elements = useAuthRoutes(routes);
    return <Suspense fallback={<Spinner fullScreen size="medium" />}>{elements}</Suspense>;
};

export default Routes;
