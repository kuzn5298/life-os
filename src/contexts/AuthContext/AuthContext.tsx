import React, { createContext, useEffect, useMemo, useState } from 'react';

import { Spinner } from 'components';
import { authService } from 'services';
import { UserAuthInformation } from 'types';

export interface IAuthContext {
    isLoggedIn: boolean;
    user: UserAuthInformation | null;
}

export interface IAuthProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<UserAuthInformation | null>(null);

    useEffect(() => {
        const unsubscribe = authService.authStateChangeSubscription((userInformation) => {
            setUser(userInformation);
            setLoading(false);
        });
        return () => {
            unsubscribe?.();
        };
    }, []);

    const contextValue = useMemo(
        () => ({
            isLoggedIn: !!user,
            user,
        }),
        [user]
    );

    if (loading) {
        return <Spinner fullContainer color="appContrast" />;
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
