import { forwardRef, ForwardRefRenderFunction, useImperativeHandle } from 'react';
import { useSnackbar } from 'notistack';
import { SnackbarRef } from 'types';

// eslint-disable-next-line react/require-default-props
const SnackbarUtilsConfigurator: ForwardRefRenderFunction<SnackbarRef> = (_, ref) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useImperativeHandle(
        ref,
        () => ({
            enqueueSnackbar,
            closeSnackbar,
        }),
        [enqueueSnackbar, closeSnackbar]
    );

    return null;
};

export default forwardRef(SnackbarUtilsConfigurator);
