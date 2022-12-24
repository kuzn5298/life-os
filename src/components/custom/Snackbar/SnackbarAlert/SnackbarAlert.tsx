import React, { forwardRef, useMemo } from 'react';
import { CustomContentProps } from 'notistack';
import { Alert } from 'components';
import { SnackbarVariantEnum } from 'constpack';
import { CloseAction } from '../actions';

type SnackbarAlertProps = CustomContentProps & {
    variant:
        | SnackbarVariantEnum.ERROR
        | SnackbarVariantEnum.INFO
        | SnackbarVariantEnum.SUCCESS
        | SnackbarVariantEnum.WARNING;
};

const SnackbarAlert: React.ForwardRefRenderFunction<HTMLDivElement, SnackbarAlertProps> = (
    { id, message, variant },
    ref
) => {
    const action = useMemo(() => <CloseAction id={id} />, [id]);

    return (
        <Alert ref={ref} variant="filled" severity={variant} action={action}>
            {message}
        </Alert>
    );
};

export default forwardRef(SnackbarAlert);
