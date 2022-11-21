import React from 'react';

import { useAuth, useLanguage } from 'hooks';

const Login: React.FC = () => {
    const { onSignIn } = useAuth();
    const { t } = useLanguage();

    return (
        <div>
            <div>Login</div>
            <button type="button" onClick={onSignIn}>
                {t('auth.signIn')}
            </button>
        </div>
    );
};

export default Login;
