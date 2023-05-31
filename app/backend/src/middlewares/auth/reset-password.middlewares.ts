import {NextFunction, Request, Response} from "express";
import {resetPasswordValidator} from "../validators/auth.validators";

export interface IResetReq extends Request {
  body: {
    reset: string
    password: string
  }
}

export const resetPasswordMiddleware = async (req: IResetReq, res: Response, next: NextFunction) => {
  try {
    await resetPasswordValidator.validateAsync(req.body);

    next();
  } catch (e) {
    res.status(400).send(e.message);
  }
}
