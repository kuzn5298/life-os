import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Spinner } from 'components';
import { ThemeEnum } from 'constpack';
import { useAuth, useTheme } from 'hooks';

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
            <Suspense fallback={<Spinner fullContainer size="small" />}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MainLayout;
