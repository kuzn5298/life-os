import { useMemo } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { LanguageEnum } from 'constpack';

export interface IUseLanguage {
    t: TFunction;
    language: string;
    changeLanguage: (lng: LanguageEnum) => void;
}

export const useLanguage = (ns?: string | string[]): IUseLanguage => {
    const { t, i18n } = useTranslation(ns);
    const language = useMemo(() => i18n.language, [i18n.language]);

    const changeLanguage = (lng: LanguageEnum): void => {
        i18n.changeLanguage(lng);
    };

    return { t, language, changeLanguage };
};
