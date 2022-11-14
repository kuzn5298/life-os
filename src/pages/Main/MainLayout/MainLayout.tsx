import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from 'hooks';

const MainLayout: React.FC = () => {
    const { onSignOut } = useAuth();

    return (
        <div>
            <div>Main</div>
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
