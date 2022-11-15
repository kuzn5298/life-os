import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'pages';
import { AuthProvider, ThemeProvider } from 'contexts';
import { APPLICATION_ROUTES } from 'libs/routes';

const App: React.FC = () => (
    <AuthProvider>
        <ThemeProvider>
            <Router>
                <Routes routes={APPLICATION_ROUTES} />
            </Router>
        </ThemeProvider>
    </AuthProvider>
);

export default App;
