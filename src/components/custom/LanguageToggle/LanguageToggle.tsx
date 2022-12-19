import React, { useCallback, useState } from 'react';

import { LanguageEnum, LANGUAGE_NAMES_LIST } from 'constpack';
import { useLanguage } from 'hooks';
import { Button, Menu, MenuItem } from '../../core';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '../../icons';

const LanguageToggle: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { t, language, changeLanguage } = useLanguage('language');

    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback((): void => {
        setAnchorEl(null);
    }, []);

    const handleChange = useCallback(
        (languageName: LanguageEnum): void => {
            handleClose();
            changeLanguage(languageName);
        },
        [handleClose, changeLanguage]
    );

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
                disableElevation
                endIcon={<KeyboardArrowDownIcon />}
            >
                {t(`${language}.code`)}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {LANGUAGE_NAMES_LIST.map((languageName) => (
                    <MenuItem key={languageName} onClick={() => handleChange(languageName)}>
                        {t(`${languageName}.flag`)} {t(`${languageName}.native`)}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default LanguageToggle;
