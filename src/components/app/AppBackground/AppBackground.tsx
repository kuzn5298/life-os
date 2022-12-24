import styled from 'styled-components';

import { darken } from 'components';

const AppBackground = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.palette.background.app};
    background: ${({ theme }) =>
        `linear-gradient(
            ${theme.palette.background.app},
            ${darken(theme.palette.background.app, 0.1)}
        )`};
    padding: ${({ theme }) => theme.spacing(1)};
`;

export default AppBackground;
