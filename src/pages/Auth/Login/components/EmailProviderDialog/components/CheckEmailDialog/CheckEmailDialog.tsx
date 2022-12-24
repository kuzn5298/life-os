import React, { useMemo } from 'react';

import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from 'components';
import { useLanguage } from 'hooks';
import { storage } from 'libs/storage';
import { SIGN_IN_EMAIL_LOCAL_STORAGE } from 'constpack';

type CheckEmailDialogProps = {
    onClose: () => void;
};

const CheckEmailDialog: React.FC<CheckEmailDialogProps> = ({ onClose }) => {
    const { t } = useLanguage();
    const email = useMemo(() => storage.get(SIGN_IN_EMAIL_LOCAL_STORAGE), []);

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
