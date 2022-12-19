import React, { useCallback, useMemo } from 'react';
import { FieldValues } from 'react-hook-form';

import { Button, Spinner, TextField, Typography } from 'components';
import { NavigateBefore as NavigateBeforeIcon } from 'components/icons';
import { useForm, useLanguage } from 'hooks';
import { useEmailLinkVerification } from './hooks';
import { emailLinkVerificationResolver } from './EmailLinkVerification.resolver';
import EmailLinkVerificationContainer from './EmailLinkVerification.styled';

const EmailLinkVerification: React.FC = () => {
    const { t } = useLanguage();
    const { loading, serverEmailError, resetServerEmailError, signInByEmail, goToLogin } =
        useEmailLinkVerification();

    const {
        muiRegister,
        handleSubmit,
        formState: {
            errors: { email: localEmailError },
        },
    } = useForm<FieldValues>({
        resolver: emailLinkVerificationResolver,
    });

    const onSubmit = useCallback(
        (data: FieldValues) => {
            signInByEmail(data.email);
        },
        [signInByEmail]
    );

    const error = useMemo((): string | null => {
        if (serverEmailError) {
            return t(`firebase.${serverEmailError}`, { ns: 'error' });
        }

        if (localEmailError?.message) {
            return t(`error.${localEmailError.message}`, { ns: 'form' });
        }

        return null;
    }, [localEmailError, serverEmailError, t]);

    if (loading) {
        return <Spinner fullContainer color="paperContrast" />;
    }

    return (
        <EmailLinkVerificationContainer maxWidth="sm">
            <div className="container">
                <Typography align="center" variant="h5" component="h1" className="title">
                    {t('auth.emailLinkVerification.title')}
                </Typography>
                <form
                    className="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit, resetServerEmailError)}
                >
                    <TextField
                        {...muiRegister('email')}
                        autoFocus
                        required
                        fullWidth
                        label={t('label.email', { ns: 'form' })}
                        type="email"
                        variant="standard"
                        error={!!error}
                        helperText={error}
                    />
                    <Button type="submit" variant="contained" size="large" fullWidth>
                        {t('auth.emailLinkVerification.submitButton')}
                    </Button>
                </form>
                <Button
                    onClick={goToLogin}
                    size="large"
                    fullWidth
                    startIcon={<NavigateBeforeIcon />}
                >
                    {t('auth.emailLinkVerification.goToLoginButton')}
                </Button>
            </div>
        </EmailLinkVerificationContainer>
    );
};

export default EmailLinkVerification;
