import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;

    .login {
        max-width: ${({ theme }) => theme.breakpoints.values.sm / 2}px;
        width: 100%;
    }

    .title {
        margin-bottom: ${({ theme }) => theme.spacing(2)};
    }

    .providers {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
    }

    .provider {
        display: flex;
        justify-content: space-between;

        &::after {
            content: '';
        }
    }
`;

export default LoginContainer;
