import { ThemeOptions } from 'components';

import defaultTheme from './default';

export default {
    ...defaultTheme,
    palette: {
        primary: {
            main: '#297c95',
            light: '#5fa9c4',
            dark: '#004e65',
            contrastText: '#fff',
        },
        secondary: {
            main: '#edc7c1',
            light: '#fffaf4',
            dark: '#ba9691',
            contrastText: '#000',
        },
        background: {
            app: '#496d83',
            paper: '#fff',
            backdrop: 'rgba(0, 0, 0, 0.5)',
        },
        social: {
            apple: '#000000',
            google: '#ea4236',
            facebook: '#1a77f2',
            twitter: '#0095f2',
            github: '#273135',
            email: '#757575',
        },
    },
} as ThemeOptions;
