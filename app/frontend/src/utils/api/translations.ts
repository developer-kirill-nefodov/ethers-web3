import {ApiUrls} from "../constants/api-urls";
import {AxiosResponse} from "axios";

export type ITranslationsName = 'en';

interface IGetTranslationsRes extends AxiosResponse {
  data: {

  }
}

export const getTranslations = async (lng: ITranslationsName) => {
  try {
    const {data}: IGetTranslationsRes =
      await window.axios.get(`${ApiUrls.translations.getTranslation}/${lng}`);

    return data
  } catch (e) {

  }
}
