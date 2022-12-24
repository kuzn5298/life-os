import { useCallback, useContext, useEffect, useId, useLayoutEffect } from 'react';

import { GlobalSpinnerContext } from 'contexts';

type UseGlobalSpinner = {
    showSpinner: (id: string) => void;
    closeSpinner: (id: string) => void;
    closeAllSpinners: () => void;
    asyncWithSpinner: (asyncFunc: () => Promise<unknown> | Error) => Promise<unknown> | Error;
};

export const useGlobalSpinner = (loading = false): UseGlobalSpinner => {
    const spinnerId = useId();

    const {
        showSpinner: rootShowSpinner,
        closeSpinner: rootCloseSpinner,
        closeAllSpinners,
    } = useContext(GlobalSpinnerContext);

    const showSpinner = useCallback(
        (id: string = spinnerId) => rootShowSpinner(id),
        [rootShowSpinner, spinnerId]
    );

    const closeSpinner = useCallback(
        (id: string = spinnerId) => rootCloseSpinner(id),
        [rootCloseSpinner, spinnerId]
    );

    const asyncWithSpinner = useCallback(
        async <T = unknown,>(asyncFunc: () => Promise<T> | Error): Promise<T | Error> => {
            try {
                showSpinner();
                return await asyncFunc();
            } finally {
                closeSpinner();
            }
        },
        [closeSpinner, showSpinner]
    );

    useLayoutEffect(() => {
        if (loading) {
            showSpinner();
        } else {
            closeSpinner();
        }
    }, [closeSpinner, loading, showSpinner]);

    useEffect(() => closeSpinner, [closeSpinner]);

    return {
        showSpinner,
        closeSpinner,
        closeAllSpinners,
        asyncWithSpinner,
    };
};
