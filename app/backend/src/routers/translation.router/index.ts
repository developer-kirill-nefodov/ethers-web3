import type {IAnyRouter} from "../";

import {getByLanguageController} from "../../controllers/translation";
import {getByLanguageMiddlewares} from "../../middlewares/translation";

const TranslationRouter: IAnyRouter = {
  prefix: 'translations',
  routeData: [
    {
      method: 'post',
      path: 'getByLanguage',
      middleware: [getByLanguageMiddlewares],
      handler: [getByLanguageController]
    }
  ]
}

export default TranslationRouter;
