import {NextFunction, Request, Response} from "express";
import {forgotPasswordValidator} from "../validators/auth.validators";

export interface IForgotReq extends Request {
  body: {
    email: string
  }
}

export const forgotPasswordMiddleware = async (req: IForgotReq, res: Response, next: NextFunction) => {
  try {
    await forgotPasswordValidator.validateAsync(req.body);

    next();
  } catch (e) {
    res.status(400).send(e.message);
  }
}
