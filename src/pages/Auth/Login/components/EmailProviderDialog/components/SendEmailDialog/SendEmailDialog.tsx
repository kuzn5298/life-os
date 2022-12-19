import React, { useCallback } from 'react';

import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from 'components';
import { useForm, useLanguage } from 'hooks';
import { sendEmailResolver } from './SendEmail.resolver';

type SendEmailDialogProps = {
    onSendEmail: (email: string) => void;
    onClose: () => void;
};

type FieldValues = {
    email: string;
};

const SendEmailDialog: React.FC<SendEmailDialogProps> = ({ onSendEmail, onClose }) => {
    const {
        muiRegister,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        resolver: sendEmailResolver,
    });

    const { t } = useLanguage();

    const onSubmit = useCallback((data: FieldValues) => onSendEmail(data.email), [onSendEmail]);

    return (
        <>
            <DialogTitle>{t('auth.sendEmailDialog.title')}</DialogTitle>
            <DialogContent>
                <DialogContentText
                    sx={{
                        marginBottom: (theme) => theme.spacing(1),
                    }}
                >
                    {t('auth.sendEmailDialog.contentText')}
                </DialogContentText>
                <TextField
                    {...muiRegister('email')}
                    autoFocus
                    required
                    fullWidth
                    label={t('label.email', { ns: 'form' })}
                    type="email"
                    variant="standard"
                    error={!!errors.email}
                    helperText={
                        errors.email?.message && t(`error.${errors.email.message}`, { ns: 'form' })
                    }
                />
            </DialogContent>
            <DialogActions>
                <Button color="inherit" onClick={onClose}>
                    {t('auth.sendEmailDialog.cancelButton')}
                </Button>
                <Button onClick={handleSubmit(onSubmit)}>
                    {t('auth.sendEmailDialog.continueButton')}
                </Button>
            </DialogActions>
        </>
    );
};

export default SendEmailDialog;
