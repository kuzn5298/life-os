import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';

import { AppRouteEnum } from 'constpack';
import { authService } from 'services';

type UseEmailLinkVerification = {
    loading: boolean;
    goToLogin: () => void;
    signInByEmail: (email: string) => void;
    serverEmailError: string | null;
    resetServerEmailError: () => void;
};

export const useEmailLinkVerification = (): UseEmailLinkVerification => {
    const [serverEmailError, setServerEmailError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const goToLogin = useCallback(() => navigate(AppRouteEnum.LOGIN), [navigate]);

    const resetServerEmailError = useCallback(() => setServerEmailError(null), []);

    const signInByEmail = useCallback(async (email: string): Promise<void> => {
        try {
            setLoading(true);
            await authService.signInByEmailLink(email);
        } catch (e: unknown) {
            const name = (e as FirebaseError)?.name;
            if (name === 'FirebaseError') {
                const code = (e as FirebaseError)?.code;
                const errorMessage = code;
                setServerEmailError(errorMessage);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (authService.isSignInWithEmailLink()) {
            const email = '';
            if (email) {
                signInByEmail(email);
            } else {
                setLoading(false);
            }
        } else {
            goToLogin();
        }
    }, [goToLogin, signInByEmail]);

    return { loading, serverEmailError, resetServerEmailError, goToLogin, signInByEmail };
};
