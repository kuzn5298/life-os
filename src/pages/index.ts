import { lazy } from 'react';

import Routes from './Routes';

// Auth
export const Login = lazy(() => import('./Auth/Login'));

// Main
export const MainLayout = lazy(() => import('./Main/MainLayout'));
export const Home = lazy(() => import('./Main/Home'));

// Error
export { default as NotFound } from './Error/NotFound';

export default Routes;
