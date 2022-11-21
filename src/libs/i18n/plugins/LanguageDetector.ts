import { InitOptions, LanguageDetectorModule, Services } from 'i18next';

const LOCAL_STORAGE_NAME = 'lng';

interface DetectorOptions {
    localStorageName?: string;
    languages?: string[];
}

class LanguageDetector implements LanguageDetectorModule {
    type = 'languageDetector' as const;

    localStorageName!: string;

    languages!: string[];

    init(services: Services, detectorOptions: DetectorOptions, i18nextOptions: InitOptions): void {
        const { localStorageName, languages } = detectorOptions;
        const { resources = {} } = i18nextOptions;

        this.localStorageName = localStorageName ?? LOCAL_STORAGE_NAME;
        this.languages = languages ?? Object.keys(resources);
    }

    detect(): string | readonly string[] | undefined {
        const localLanguage = localStorage.getItem(this.localStorageName);
        const systemLanguage = navigator.language.split('-')[0];
        const language = localLanguage ?? systemLanguage;

        if (this.languages.includes(language)) {
            return language;
        }

        return undefined;
    }

    cacheUserLanguage(lng: string): void {
        localStorage.setItem(this.localStorageName, lng);
    }
}

export default new LanguageDetector();
