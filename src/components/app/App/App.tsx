import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'pages';
import { AuthProvider } from 'contexts';
import { APPLICATION_ROUTES } from 'libs/routes';

const App: React.FC = () => (
    <AuthProvider>
        <Router>
            <Routes routes={APPLICATION_ROUTES} />
        </Router>
    </AuthProvider>
);

export default App;
