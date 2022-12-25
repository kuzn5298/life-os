import { css } from 'styled-components/macro';

import MontserratLight from './Montserrat/Montserrat-Light.ttf';
import MontserratRegular from './Montserrat/Montserrat-Regular.ttf';
import MontserratMedium from './Montserrat/Montserrat-Medium.ttf';
import MontserratBold from './Montserrat/Montserrat-Bold.ttf';

const fonts = css`
    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
`;

export default fonts;
