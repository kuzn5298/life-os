import React, { createContext, useCallback, useMemo, useRef } from 'react';
import { OptionsObject, SnackbarKey, SnackbarProvider as NotistackProvider } from 'notistack';
import { SnackbarAlert, SnackbarCommon } from 'components';
import { SnackbarVariantEnum } from 'constpack';
import { CloseSnackbar, PushSnackbar, SnackbarRef } from 'types';

import SnackbarUtilsConfigurator from './SnackbarUtilsConfigurator';

export interface ISnackbarContext {
    pushSnackbar: PushSnackbar;
    closeSnackbar: CloseSnackbar;
}

export interface ISnackbarProviderProps {
    children: React.ReactNode;
}

export const SnackbarContext = createContext<ISnackbarContext>({} as ISnackbarContext);

export const SnackbarProvider: React.FC<ISnackbarProviderProps> = ({ children }) => {
    const notistackRef = useRef<SnackbarRef>(null);

    const pushSnackbar = useCallback(
        (message: string, options?: OptionsObject): SnackbarKey | undefined =>
            notistackRef.current?.enqueueSnackbar(message, options),
        []
    );

    const closeSnackbar = useCallback((key?: SnackbarKey): void => {
        notistackRef.current?.closeSnackbar(key);
    }, []);

    const contextValue = useMemo(
        () => ({
            pushSnackbar,
            closeSnackbar,
        }),
        [closeSnackbar, pushSnackbar]
    );

    return (
        <SnackbarContext.Provider value={contextValue}>
            <NotistackProvider
                Components={{
                    [SnackbarVariantEnum.DEFAULT]: SnackbarCommon,
                    [SnackbarVariantEnum.ERROR]: SnackbarAlert,
                    [SnackbarVariantEnum.INFO]: SnackbarAlert,
                    [SnackbarVariantEnum.SUCCESS]: SnackbarAlert,
                    [SnackbarVariantEnum.WARNING]: SnackbarAlert,
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {children}
                <SnackbarUtilsConfigurator ref={notistackRef} />
            </NotistackProvider>
        </SnackbarContext.Provider>
    );
};
