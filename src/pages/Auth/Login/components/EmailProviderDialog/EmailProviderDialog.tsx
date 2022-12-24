import React, { useCallback, useState } from 'react';

import { Dialog } from 'components';
import { authService } from 'services';
import { useLanguage, useSnackbar } from 'hooks';
import { SIGN_IN_EMAIL_LOCAL_STORAGE, SnackbarVariantEnum } from 'constpack';
import { getFirebaseCodeError } from 'libs/firebase';
import { storage } from 'libs/storage';
import { CheckEmailDialog, SendEmailDialog } from './components';
import { ScreenEnum } from './enums';

type EmailProviderDialogProps = {
    onClose: () => void;
};

const EmailProviderDialog: React.FC<EmailProviderDialogProps> = ({ onClose }) => {
    const [screen, setScreen] = useState(ScreenEnum.SEND_EMAIL);
    const { t } = useLanguage('error');
    const { pushSnackbar } = useSnackbar();

    const onSendEmail = useCallback(
        async (userEmail: string): Promise<void> => {
            try {
                await authService.sendSignInLinkToEmail(userEmail);
                storage.set(SIGN_IN_EMAIL_LOCAL_STORAGE, userEmail);
                setScreen(ScreenEnum.CHECK_EMAIl);
            } catch (e) {
                const code = getFirebaseCodeError(e);
                if (code) {
                    const message = t(`firebase.${code}`);
                    pushSnackbar(message, { variant: SnackbarVariantEnum.ERROR });
                }
                onClose();
            }
        },
        [onClose, pushSnackbar, t]
    );

    return (
        <Dialog open onClose={onClose}>
            {screen === ScreenEnum.SEND_EMAIL && (
                <SendEmailDialog onClose={onClose} onSendEmail={onSendEmail} />
            )}
            {screen === ScreenEnum.CHECK_EMAIl && <CheckEmailDialog onClose={onClose} />}
        </Dialog>
    );
};

export default EmailProviderDialog;
