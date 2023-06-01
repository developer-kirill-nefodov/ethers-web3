import type {Request, Response} from "express";

interface IGetTranslationI18nReq extends Request {

}

export const getTranslationI18n = async (req: IGetTranslationI18nReq, res: Response) => {
  try {
   res.status(200).json({})
  } catch (e) {
    res.status(400).send(e.message);
  }
}
