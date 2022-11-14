import { useContext, useCallback } from 'react';

import { AuthContext } from 'contexts';

type UseAuthHook = {
    isLoggedIn: boolean;
    onSignIn: () => Promise<void>;
    onSignOut: () => Promise<void>;
};

export const useAuth = (): UseAuthHook => {
    const { isLoggedIn, onLogin, onLogout } = useContext(AuthContext);

    const onSignIn = useCallback(async (): Promise<void> => {
        onLogin();
    }, [onLogin]);

    const onSignOut = useCallback(async (): Promise<void> => {
        onLogout();
    }, [onLogout]);

    return {
        isLoggedIn,
        onSignIn,
        onSignOut,
    };
};
