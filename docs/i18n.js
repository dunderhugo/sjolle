import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "/src/locales/en/translation.json";
import sv from "/src/locales/sv/translation.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Set the language for the test
    fallbackLng: 'en',
    debug: false,
    
    resources: {
      en: {
        translation: en,
      },
      sv: {
        translation: sv,
      },
    },

    interpolation: {
      escapeValue: false, // Not needed for react
    },
  });

export default i18n;