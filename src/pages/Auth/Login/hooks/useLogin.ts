import { useState, useCallback } from 'react';

import { authService } from 'services';
import { ProviderEnum } from 'constpack';
import { useGlobalSpinner } from 'hooks';

type UseLoginHook = {
    isEmailProvider: boolean;
    openEmailProvider: () => void;
    closeEmailProvider: () => void;
    signInByProvider: (provider: ProviderEnum) => Promise<void>;
};

export const useLogin = (): UseLoginHook => {
    const [isEmailProvider, setIsEmailProvider] = useState(false);
    const { asyncWithSpinner } = useGlobalSpinner();

    const openEmailProvider = useCallback((): void => {
        setIsEmailProvider(true);
    }, []);

    const closeEmailProvider = useCallback((): void => {
        setIsEmailProvider(false);
    }, []);

    const signInByProvider = useCallback(
        async (provider: ProviderEnum): Promise<void> => {
            await asyncWithSpinner(() => authService.signInByProvider(provider));
        },
        [asyncWithSpinner]
    );

    return {
        isEmailProvider,
        openEmailProvider,
        closeEmailProvider,
        signInByProvider,
    };
};
