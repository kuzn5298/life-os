import { useContext } from 'react';

import { Theme } from 'components';
import { ThemeEnum } from 'constpack';
import { ThemeContext } from 'contexts';

type UseThemeHook = {
    theme: Theme;
    themeName: ThemeEnum;
    setThemeByName: (themeName: ThemeEnum) => void;
};

export const useTheme = (): UseThemeHook => useContext(ThemeContext);
