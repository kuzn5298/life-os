import { ThemeOptions } from 'components';

import defaultTheme from './default';

export default {
    ...defaultTheme,
    palette: {
        mode: 'dark',
        primary: {
            main: '#5a8c6f',
            light: '#88bc9d',
            dark: '#2e5e44',
            contrastText: '#000',
        },
        secondary: {
            main: '#7b696c',
            light: '#aa979a',
            dark: '#4f3e41',
            contrastText: '#fff',
        },
        background: {
            paper: '#1f1f1f',
            app: '#000',
            backdrop: 'rgba(0, 0, 0, 0.5)',
        },
        social: {
            apple: '#eeeeee',
            google: '#ff7761',
            facebook: '#6ca5ff',
            twitter: '#66c5ff',
            github: '#809aa6',
            email: '#a4a4a4',
        },
    },
} as ThemeOptions;
