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
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }
`;

export default GlobalStyle;
