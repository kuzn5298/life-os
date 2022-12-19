import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Button, LanguageToggle, Paper, Spinner, ThemeToggle } from 'components';
import { authService } from 'services';
import MainLayoutContainer from './MainLayout.styled';

const MainLayout: React.FC = () => (
    <MainLayoutContainer>
        <div className="header">
            <ThemeToggle />
            <LanguageToggle />
            <Button onClick={authService.signOut} variant="contained" color="secondary">
                Sing Out
            </Button>
        </div>
        <Paper className="body">
            <Suspense fallback={<Spinner fullContainer color="paperContrast" />}>
                <Outlet />
            </Suspense>
        </Paper>
    </MainLayoutContainer>
);

export default MainLayout;
