import React from 'react';

import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from 'components';
import { useLanguage } from 'hooks';

type CheckEmailDialogProps = {
    email: string;
    onClose: () => void;
};

const CheckEmailDialog: React.FC<CheckEmailDialogProps> = ({ email, onClose }) => {
    const { t } = useLanguage();

    return (
        <>
            <DialogTitle>{t('auth.checkEmailDialog.title')}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {t('auth.checkEmailDialog.contentText', { email })}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{t('auth.checkEmailDialog.okButton')}</Button>
            </DialogActions>
        </>
    );
};

export default CheckEmailDialog;
