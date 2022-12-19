import React, { createContext, useCallback, useMemo, useState } from 'react';

import { Backdrop, Spinner } from 'components';

export interface IGlobalSpinnerContext {
    showSpinner: (id: string) => void;
    closeSpinner: (id: string) => void;
    closeAllSpinners: () => void;
}

export interface IGlobalSpinnerProviderProps {
    children: React.ReactNode;
}

export const GlobalSpinnerContext = createContext<IGlobalSpinnerContext>(
    {} as IGlobalSpinnerContext
);

export const GlobalSpinnerProvider: React.FC<IGlobalSpinnerProviderProps> = ({ children }) => {
    const [ids, setIds] = useState<string[]>([]);

    const open = useMemo(() => Boolean(ids.length), [ids]);

    const showSpinner = useCallback((id: string) => {
        setIds((spinnerIds) => {
            if (!spinnerIds.includes(id)) {
                return [...spinnerIds, id];
            }
            return spinnerIds;
        });
    }, []);

    const closeSpinner = useCallback((id: string) => {
        setIds((spinnerIds) => spinnerIds.filter((spinnerId) => id !== spinnerId));
    }, []);

    const closeAllSpinners = useCallback(() => {
        setIds([]);
    }, []);

    const contextValue = useMemo(
        () => ({
            showSpinner,
            closeSpinner,
            closeAllSpinners,
        }),
        [showSpinner, closeSpinner, closeAllSpinners]
    );

    return (
        <GlobalSpinnerContext.Provider value={contextValue}>
            {children}
            <Backdrop open={open}>
                <Spinner fullContainer color="backdropContrast" />
            </Backdrop>
        </GlobalSpinnerContext.Provider>
    );
};
