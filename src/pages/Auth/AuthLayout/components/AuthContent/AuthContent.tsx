import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Paper, Spinner } from 'components';

type AuthContentProps = {
    className?: string;
};

const AuthContent: React.FC<AuthContentProps> = ({ className = '' }) => (
    <Paper className={className}>
        <Suspense fallback={<Spinner fullContainer color="paperContrast" />}>
            <Outlet />
        </Suspense>
    </Paper>
);

export default AuthContent;
