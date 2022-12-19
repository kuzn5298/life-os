/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { Palette, Theme, TypeBackground } from 'components';

interface CustomTypeBackground extends TypeBackground {
    app: string;
    backdrop: string;
}

interface CustomPalette extends Palette {
    background: CustomTypeBackground;
    social: {
        [key: string]: string;
    };
}

declare module '@mui/material/styles' {
    interface Theme {
        palette: CustomPalette;
    }
    interface ThemeOptions {
        palette: Partial<CustomPalette>;
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
