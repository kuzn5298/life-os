import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from 'translations';
import { DEFAULT_LANGUAGE, LANGUAGE_LOCAL_STORAGE, LANGUAGE_NAMES_LIST } from 'constpack';

import { LanguageDetector } from './plugins';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: DEFAULT_LANGUAGE,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            localStorageName: LANGUAGE_LOCAL_STORAGE,
            languages: LANGUAGE_NAMES_LIST,
        },
    });

export { i18n };
