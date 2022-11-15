import { ThemeOptions } from 'components';
import { THEME_LOCAL_STORAGE, ThemeEnum, DEFAULT_THEME_NAME } from 'constpack';
import { DARK_THEME, LIGHT_THEME } from './configs';

const THEMES = {
    [ThemeEnum.DARK]: DARK_THEME,
    [ThemeEnum.LIGHT]: LIGHT_THEME,
};

export const setThemeNameToLocalStorages = (themeName: ThemeEnum): void => {
    localStorage.setItem(THEME_LOCAL_STORAGE, themeName);
};

export const getThemeNameFromLocalStorages = (): ThemeEnum | null =>
    localStorage.getItem(THEME_LOCAL_STORAGE) as ThemeEnum | null;

export const getSystemTheme = (): ThemeEnum | null => {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')?.matches;
    return isDarkTheme ? ThemeEnum.DARK : null;
};

export const getThemeByName = (themeName: ThemeEnum): ThemeOptions => {
    setThemeNameToLocalStorages(themeName);
    const theme = THEMES[themeName];
    return theme;
};

export const isValidThemeName = (themeName: ThemeEnum): boolean => !!THEMES[themeName];

export const getUsedThemeName = (): ThemeEnum => {
    const localTheme = getThemeNameFromLocalStorages();
    const systemTheme = getSystemTheme();
    return localTheme ?? systemTheme ?? DEFAULT_THEME_NAME;
};
