import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRouteEnum, SIGN_IN_EMAIL_LOCAL_STORAGE } from 'constpack';
import { authService } from 'services';
import { storage } from 'libs/storage';
import { getFirebaseCodeError } from 'libs/firebase';

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
            storage.remove(SIGN_IN_EMAIL_LOCAL_STORAGE);
        } catch (e) {
            const code = getFirebaseCodeError(e);
            if (code) {
                setServerEmailError(code);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (authService.isSignInWithEmailLink()) {
            const email = storage.get(SIGN_IN_EMAIL_LOCAL_STORAGE);
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
