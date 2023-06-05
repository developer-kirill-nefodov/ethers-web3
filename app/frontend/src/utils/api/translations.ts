import {ApiUrls} from "../constants/api-urls";
import {AxiosResponse} from "axios";


interface IGetTranslationsRes extends AxiosResponse {
  data: {
    language: string,
    data: any
  }
}

export const getTranslations = async (lang: string) => {
  try {
    const {data}: IGetTranslationsRes =
      await window.axios.post(ApiUrls.translations.getByLanguage, {lang});

    return data;
  } catch (e) {
    console.log(e)
  }
}
