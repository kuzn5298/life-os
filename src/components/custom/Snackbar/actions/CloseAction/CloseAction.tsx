import React, { useCallback } from 'react';

import { IconButton } from 'components';
import { Close as CloseIcon } from 'components/icons';
import { useSnackbar } from 'hooks';
import { SnackbarKey } from 'types';

type CloseActionProps = {
    id: SnackbarKey;
};

const CloseAction: React.FC<CloseActionProps> = ({ id }) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
        closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
        <IconButton color="inherit" size="small" onClick={handleDismiss}>
            <CloseIcon fontSize="inherit" />
        </IconButton>
    );
};

export default CloseAction;
