import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Spinner } from 'components';
import { LanguageEnum, ThemeEnum } from 'constpack';
import { useAuth, useTheme, useLanguage } from 'hooks';

const MainLayout: React.FC = () => {
    const { setThemeByName } = useTheme();
    const { onSignOut } = useAuth();
    const { t, language, changeLanguage } = useLanguage();

    return (
        <div>
            <div>Main</div>
            <div>
                <button type="button" onClick={onSignOut}>
                    {t('auth.signOut')}
                </button>
            </div>
            <div>
                <button type="button" onClick={() => setThemeByName(ThemeEnum.LIGHT)}>
                    light
                </button>
                <button type="button" onClick={() => setThemeByName(ThemeEnum.DARK)}>
                    dark
                </button>
            </div>
            <div>
                <div>{language}</div>
                <button type="button" onClick={() => changeLanguage(LanguageEnum.RUSSIAN)}>
                    ru
                </button>
                <button type="button" onClick={() => changeLanguage(LanguageEnum.ENGLISH)}>
                    en
                </button>
            </div>

            <Suspense fallback={<Spinner fullContainer size="small" />}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MainLayout;
