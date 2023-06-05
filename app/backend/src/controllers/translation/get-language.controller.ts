import type {Response} from "express";

import TranslationModel from "../../models/translation.model";
import type {IGetByLanguageReq} from "../../middlewares/translation/get-language.middlewares";

export const getByLanguageController = async (req: IGetByLanguageReq, res: Response) => {
  try {
    const translation = await TranslationModel.findOne({
      where: {language: req.body.lang}
    });

    res.status(200).json(translation);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
