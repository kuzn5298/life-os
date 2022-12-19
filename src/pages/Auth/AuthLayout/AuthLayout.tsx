import React from 'react';

import { AuthContent, AuthHeader } from './components';
import AuthLayoutContainer from './AuthLayout.styled';

const AuthLayout: React.FC = () => (
    <AuthLayoutContainer>
        <AuthHeader className="header" />
        <AuthContent className="content" />
    </AuthLayoutContainer>
);

export default AuthLayout;
