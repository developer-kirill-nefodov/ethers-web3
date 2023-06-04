import {Request, Response} from "express";
import CountryModel from "../../models/country.model";

export const getCountriesLangController = async (req: Request, res: Response) => {
  try {
    const languages = await CountryModel.findAll({
      attributes: ['iso2', 'lang']
    });

    res.status(200).json(languages);
  } catch (e) {
    res.status(400).send(e.error);
  }
}
