import type {IAnyRouter} from "../";

import {getTranslationI18n} from "../../controllers/translation";


const TranslationRouter: IAnyRouter = {
  prefix: 'translation',
  routeData: [
    {
      method: 'get',
      path: 'i18n/:lng',
      handler: [getTranslationI18n]
    }
  ]
}

export default TranslationRouter;
