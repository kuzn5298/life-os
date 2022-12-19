import React from 'react';

import { Button, darken, Typography } from 'components';
import { Google as GoogleIcon, Email as EmailIcon } from 'components/icons';
import { ProviderEnum, PROVIDERS_LIST } from 'constpack';
import { useLanguage } from 'hooks';
import { useLogin } from './hooks';
import { EmailProviderDialog } from './components';
import LoginContainer from './Login.styled';

const ICON = {
    [ProviderEnum.GOOGLE]: <GoogleIcon />,
    [ProviderEnum.EMAIL]: <EmailIcon />,
};

const Login: React.FC = () => {
    const { t } = useLanguage();
    const { signInByProvider, openEmailProvider, closeEmailProvider, isEmailProvider } = useLogin();

    return (
        <>
            <LoginContainer>
                <div className="login">
                    <Typography align="center" variant="h5" component="h1" className="title">
                        {t('auth.welcomeTo', { appName: t('common.name', { ns: 'app' }) })}
                    </Typography>
                    <div className="providers">
                        {PROVIDERS_LIST.map((provider) => (
                            <Button
                                key={provider}
                                variant="contained"
                                size="large"
                                className="provider"
                                fullWidth
                                disableElevation
                                startIcon={ICON[provider]}
                                onClick={() => {
                                    if (provider === ProviderEnum.EMAIL) {
                                        openEmailProvider();
                                    } else {
                                        signInByProvider(provider);
                                    }
                                }}
                                sx={{
                                    backgroundColor: (theme) => theme.palette.social[provider],
                                    ':hover': {
                                        backgroundColor: (theme) =>
                                            theme.palette.social[provider] &&
                                            darken(theme.palette.social[provider], 0.2),
                                    },
                                }}
                            >
                                {t('auth.signInWith', {
                                    provider: t(`provider.${provider}`, { ns: 'app' }),
                                })}
                            </Button>
                        ))}
                    </div>
                </div>
            </LoginContainer>
            {isEmailProvider && <EmailProviderDialog onClose={closeEmailProvider} />}
        </>
    );
};

export default Login;
