import React, { createContext, useCallback, useMemo, useState } from 'react';

export interface IAuthContext {
    isLoggedIn: boolean;
    onLogin: () => void;
    onLogout: () => void;
}

export interface IAuthProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const onLogin = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    const contextValue = useMemo(
        () => ({
            isLoggedIn,
            onLogin,
            onLogout,
        }),
        [isLoggedIn, onLogin, onLogout]
    );

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
