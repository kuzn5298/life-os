import { LanguageEnum } from 'constpack';

import translationEN from './en';
import translationRU from './ru';

const resources = {
    [LanguageEnum.ENGLISH]: translationEN,
    [LanguageEnum.RUSSIAN]: translationRU,
};

export default resources;
