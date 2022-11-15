/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { ThemeOptions } from 'components';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeOptions {}
}
