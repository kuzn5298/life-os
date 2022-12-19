import * as React from 'react';

import { useTheme } from 'hooks';
import { ThemeEnum } from 'constpack';
import { Button } from '../../core';
import { LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '../../icons';

const ICON = {
    [ThemeEnum.DARK]: <LightModeIcon />,
    [ThemeEnum.LIGHT]: <DarkModeIcon />,
};

const TOGGLE = {
    [ThemeEnum.DARK]: ThemeEnum.LIGHT,
    [ThemeEnum.LIGHT]: ThemeEnum.DARK,
};

const ThemeToggle: React.FC = () => {
    const { themeName, setThemeByName } = useTheme();

    return (
        <Button
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => setThemeByName(TOGGLE[themeName])}
        >
            {ICON[themeName]}
        </Button>
    );
};

export default ThemeToggle;
