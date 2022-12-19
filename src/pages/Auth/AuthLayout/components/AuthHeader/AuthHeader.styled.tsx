import styled from 'styled-components';

const AuthHeaderContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.palette.getContrastText(theme.palette.background.app)};

    .logo {
        font-size: 6rem;
    }

    .actions {
        position: absolute;
        display: flex;
        top: ${({ theme }) => theme.spacing(2)};
        right: ${({ theme }) => theme.spacing(2)};
        gap: ${({ theme }) => theme.spacing(2)};
    }
`;

export default AuthHeaderContainer;
