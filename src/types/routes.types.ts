import { RouteObject } from 'react-router-dom';

export type AuthRouteObject = RouteObject & {
    forAuth?: boolean;
    forGuest?: boolean;
    children?: AuthRouteObject[];
};
