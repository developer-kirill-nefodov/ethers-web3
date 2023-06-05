import type {NextFunction, Request, Response} from "express";
import {getByLanguageValidator} from "../validators/translation.validators";

export interface IGetByLanguageReq extends Request {
  body: {
    lang: string
  }
}

export const getByLanguageMiddlewares = async (req: IGetByLanguageReq, res: Response, next: NextFunction) => {
  try {
    await getByLanguageValidator.validateAsync(req.body);

    next();
  } catch (e) {
    res.status(400).send(e.message);
  }
}
