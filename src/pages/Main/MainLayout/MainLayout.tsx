import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth, useTheme } from 'hooks';
import { ThemeEnum } from 'constpack';

const MainLayout: React.FC = () => {
    const { setThemeByName } = useTheme();
    const { onSignOut } = useAuth();

    return (
        <div>
            <div>Main</div>
            <button type="button" onClick={() => setThemeByName(ThemeEnum.LIGHT)}>
                light
            </button>
            <button type="button" onClick={() => setThemeByName(ThemeEnum.DARK)}>
                dark
            </button>
            <button type="button" onClick={onSignOut}>
                Sign Out
            </button>
            <Suspense fallback={<div>loading ...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MainLayout;
