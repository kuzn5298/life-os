import { ThemeOptions } from 'components';

import defaultTheme from './default';

export default {
    ...defaultTheme,
    palette: {
        background: {
            default: 'rgb(20,20,20)',
        },
        text: {
            primary: 'rgb(229, 229, 229)',
        },
        mode: 'dark',
    },
} as ThemeOptions;
