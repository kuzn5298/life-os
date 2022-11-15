import React, { createContext, useState, useCallback, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { CssBaseline, createTheme, Theme } from 'components';
import { getThemeByName, getUsedThemeName, isValidThemeName } from 'libs/theme';
import { ThemeEnum } from 'constpack';

import GlobalStyle from 'global.styled';

export interface IThemeContext {
    theme: Theme;
    themeName: ThemeEnum;
    setThemeByName: (themeName: ThemeEnum) => void;
}

export interface IThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState(getUsedThemeName);

    const theme = useMemo(() => {
        const themeConfig = getThemeByName(themeName);
        return createTheme(themeConfig);
    }, [themeName]);

    const setThemeByName = useCallback((newThemeName: ThemeEnum): void => {
        if (isValidThemeName(newThemeName)) {
            setThemeName(newThemeName);
        }
    }, []);

    const contextValue = useMemo(
        () => ({
            theme,
            themeName,
            setThemeByName,
        }),
        [theme, themeName, setThemeByName]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <StyledThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
