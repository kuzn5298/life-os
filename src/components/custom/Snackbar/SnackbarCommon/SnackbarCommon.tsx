import React, { forwardRef, useMemo } from 'react';
import { CustomContentProps } from 'notistack';
import { SnackbarContent } from 'components';
import { CloseAction } from '../actions';

type SnackbarCommonProps = CustomContentProps;

const SnackbarCommon: React.ForwardRefRenderFunction<HTMLDivElement, SnackbarCommonProps> = (
    { id, message },
    ref
) => {
    const action = useMemo(() => <CloseAction id={id} />, [id]);

    return <SnackbarContent ref={ref} message={message} action={action} />;
};

export default forwardRef(SnackbarCommon);
