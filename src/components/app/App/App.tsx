import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'pages';
import { AuthProvider, GlobalSpinnerProvider, ThemeProvider, SnackbarProvider } from 'contexts';
import { APPLICATION_ROUTES } from 'libs/routes';
import { AppBackground } from '../AppBackground';

const App: React.FC = () => (
    <ThemeProvider>
        <GlobalSpinnerProvider>
            <SnackbarProvider>
                <AppBackground>
                    <AuthProvider>
                        <Router>
                            <Routes routes={APPLICATION_ROUTES} />
                        </Router>
                    </AuthProvider>
                </AppBackground>
            </SnackbarProvider>
        </GlobalSpinnerProvider>
    </ThemeProvider>
);

export default App;
