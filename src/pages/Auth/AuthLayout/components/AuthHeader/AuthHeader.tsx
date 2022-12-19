import React from 'react';

import { LanguageToggle, ThemeToggle } from 'components';
import { Logo as LogoIcon } from 'components/icons';
import AuthHeaderContainer from './AuthHeader.styled';

type AuthHeaderProps = {
    className?: string;
};

const AuthHeader: React.FC<AuthHeaderProps> = ({ className = '' }) => (
    <AuthHeaderContainer className={className}>
        <div className="actions">
            <ThemeToggle />
            <LanguageToggle />
        </div>
        <LogoIcon className="logo" />
    </AuthHeaderContainer>
);

export default AuthHeader;
