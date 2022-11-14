import React from 'react';

import { useAuth } from 'hooks';

const Login: React.FC = () => {
    const { onSignIn } = useAuth();
    return (
        <div>
            <div>Login</div>
            <button type="button" onClick={onSignIn}>
                Sign In
            </button>
        </div>
    );
};

export default Login;
