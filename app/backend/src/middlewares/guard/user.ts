import {Response, NextFunction, Request} from 'express';

import {IUserData} from "../../helpers/token/token";

export interface IRequestAuth extends Request {
  token?: string
  userData: IUserData
}

export const isUser = async (req: IRequestAuth, res: Response, next: NextFunction) => {
  try {
    if(req.userData.role.name !== 'USER') {
      return res.status(401).send('You do not have the required permission!');
    }

    next();
  } catch (e) {
    res.status(401).send('Your auth.router is not valid.');
  }
}
