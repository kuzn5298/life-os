import styled from 'styled-components';

import { Container } from 'components';

const EmailLinkVerificationContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: ${({ theme }) => theme.spacing(2)};
        width: 100%;
        max-width: ${({ theme }) => theme.breakpoints.values.sm / 2}px;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
    }
`;

export default EmailLinkVerificationContainer;
