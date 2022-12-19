import React, { useCallback, useState } from 'react';

import { Dialog } from 'components';
import { authService } from 'services';
import { CheckEmailDialog, SendEmailDialog } from './components';
import { ScreenEnum } from './enums';

type EmailProviderDialogProps = {
    onClose: () => void;
};

const EmailProviderDialog: React.FC<EmailProviderDialogProps> = ({ onClose }) => {
    const [screen, setScreen] = useState(ScreenEnum.SEND_EMAIL);
    const [email, setEmail] = useState('');

    const onSendEmail = useCallback((userEmail: string): void => {
        setScreen(ScreenEnum.CHECK_EMAIl);
        setEmail(userEmail);
        authService.sendSignInLinkToEmail(userEmail);
    }, []);

    return (
        <Dialog open onClose={onClose}>
            {screen === ScreenEnum.SEND_EMAIL && (
                <SendEmailDialog onClose={onClose} onSendEmail={onSendEmail} />
            )}
            {screen === ScreenEnum.CHECK_EMAIl && (
                <CheckEmailDialog email={email} onClose={onClose} />
            )}
        </Dialog>
    );
};

export default EmailProviderDialog;
