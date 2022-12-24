import { useState, useCallback } from 'react';

import { authService } from 'services';
import { ProviderEnum, SnackbarVariantEnum } from 'constpack';
import { useGlobalSpinner, useLanguage, useSnackbar } from 'hooks';
import { getFirebaseCodeError } from 'libs/firebase';

type UseLoginHook = {
    isEmailProvider: boolean;
    openEmailProvider: () => void;
    closeEmailProvider: () => void;
    signInByProvider: (provider: ProviderEnum) => void;
};

export const useLogin = (): UseLoginHook => {
    const [isEmailProvider, setIsEmailProvider] = useState(false);
    const { asyncWithSpinner } = useGlobalSpinner();
    const { t } = useLanguage();
    const { pushSnackbar } = useSnackbar();

    const openEmailProvider = useCallback((): void => {
        setIsEmailProvider(true);
    }, []);

    const closeEmailProvider = useCallback((): void => {
        setIsEmailProvider(false);
    }, []);

    const signInByProvider = useCallback(
        (provider: ProviderEnum): void => {
            asyncWithSpinner(async () => {
                try {
                    await authService.signInByProvider(provider);
                } catch (e) {
                    const code = getFirebaseCodeError(e);
                    if (code) {
                        const message = t(`firebase.${code}`, { ns: 'error' });
                        pushSnackbar(message, { variant: SnackbarVariantEnum.ERROR });
                    }
                }
            });
        },
        [asyncWithSpinner, pushSnackbar, t]
    );

    return {
        isEmailProvider,
        openEmailProvider,
        closeEmailProvider,
        signInByProvider,
    };
};
