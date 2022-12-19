import styled from 'styled-components';

const AuthLayoutContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(1)};

    .header {
        flex-basis: 40%;
    }

    .content {
        flex: 1;
        overflow-y: auto;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        flex-direction: column;

        .header {
            flex-basis: 25%;
        }
    }
`;

export default AuthLayoutContainer;
