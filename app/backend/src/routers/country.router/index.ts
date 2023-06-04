import type {IAnyRouter} from "../";

import {getCountriesLangController} from "../../controllers/country";

const CountryRouter: IAnyRouter = {
  prefix: 'countries',
  routeData: [
    {
      method: 'get',
      path: 'lang',
      handler: [getCountriesLangController]
    }
  ]
}

export default CountryRouter;
