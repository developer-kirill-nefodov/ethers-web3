import {NextFunction, Request, Response} from "express";
import {loginValidator} from "../validators/auth.validators";

export interface ILoginReq extends Request {
  body: {
    email: string
    password: string
  }
}

export const loginMiddleware = async (req: ILoginReq, res: Response, next: NextFunction) => {
  try {
    await loginValidator.validateAsync(req.body);

    next();
  } catch (e) {
    res.status(400).send(e.message);
  }
}
