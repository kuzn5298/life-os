import { createGlobalStyle } from 'styled-components';

import fonts from 'assets/fonts';

const GlobalStyle = createGlobalStyle`
    ${fonts}

    body {
        color: ${({ theme }) => theme.palette?.text?.primary};
        background-color: ${({ theme }) => theme.palette?.background?.default};
        margin: 0;
        & #root {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden;
        }
    }
`;

export default GlobalStyle;
