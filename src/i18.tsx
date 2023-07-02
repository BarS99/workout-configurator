import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            footer: {
                copyright: '© 2023 REP MENTOR Poland. All rights reserved.'
            }
        }
    }
} as Resource;

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
