import React from 'react';
import { useRoutes, Navigate, RouteObject } from 'react-router-dom';

import { AuthRouteObject } from 'types';
import { AppRouteEnum } from 'constpack';

import { useAuth } from './useAuth';

const getAuthElement = (
    element: React.ReactNode,
    forAuth: boolean | undefined,
    forGuest: boolean | undefined,
    isLoggedIn: boolean
): React.ReactNode => {
    if (forAuth) {
        return !isLoggedIn ? <Navigate to={AppRouteEnum.LOGIN} /> : element;
    }

    if (forGuest) {
        return isLoggedIn ? <Navigate to={AppRouteEnum.MAIN} /> : element;
    }

    return element;
};

const parseAuthRoutes = (authRoutes: AuthRouteObject[], isLoggedIn: boolean): RouteObject[] => {
    const routes = authRoutes.map(
        ({ forAuth, forGuest, element: authElement, children: authChildren, ...props }) => {
            const element = getAuthElement(authElement, forAuth, forGuest, isLoggedIn);
            const children = authChildren && parseAuthRoutes(authChildren, isLoggedIn);

            return {
                element,
                children,
                ...props,
            } as RouteObject;
        }
    );

    return routes;
};

export const useAuthRoutes = (routes: AuthRouteObject[]): React.ReactElement | null => {
    const { isLoggedIn } = useAuth();

    const elements = useRoutes(parseAuthRoutes(routes, isLoggedIn));

    return elements;
};
