import i18n from 'i18next';
import { fabClasses } from '@mui/material';
import { initReactI18next } from 'react-i18next';

// EN
import translationEnCommon from '../language/locales/en/common.json';
import translationEnHeader from '../language/locales/en/header.json';
import translationEnHome from "../language/locales/en/home.json";

// RU
import translationRuCommon from '../language/locales/ru/common.json';
import translationRuHeader from '../language/locales/ru/header.json';
import translationRuHome from "../language/locales/ru/home.json";

// AZ
import translationAzCommon from '../language/locales/az/common.json';
import translationAzHeader from '../language/locales/az/header.json';
import translationAzHome from "../language/locales/az/home.json";

const resources = {
    en: {
        header: translationEnHeader,
        common: translationEnCommon,
        home: translationEnHome
    },
    ru: {
        header: translationRuHeader,
        common: translationRuCommon,
        home: translationRuHome
    },
    az: {
        header: translationAzHeader,
        common: translationAzCommon,
        home: translationAzHome
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: fabClasses
        },
        ns: ['header', 'common', 'home'],
        defaultNS: 'common'
    });

export default i18n;