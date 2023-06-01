import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

import {getTranslations} from "../api/translations";

const backendOptions = {
  loadPath: '{{lng}}|{{ns}}',
  request: (options: any, url: string, payload: any, callback: any) => {
    try {
      const [lng]: any[] = url.split('|');
      getTranslations(lng).then(response => {
        callback(null, {
          data: response,
          status: 200,
        });
      });
    } catch (e) {
      callback(null, {status: 500});
    }
  },
};

i18n.use(Backend).use(initReactI18next).init(
  {
    lng: 'en',
    fallbackLng: 'en',
    backend: backendOptions,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      transSupportBasicHtmlNodes: true,
    },
  },
  err => err && console.error('something went wrong loading', err)
);

export default i18n;
