import type {Response, NextFunction, Request} from 'express';

import {fullCheckJWT, IUserData} from "../../helpers/token/token";
import {TOKENS_NAME_DATA} from "../../constants";

export interface IRequestAuth extends Request {
  token?: string
  userData: IUserData
}

export const isAuthorized = async (req: IRequestAuth, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.headers.authorization?.split(' ')[1];
    const refreshToken = req.cookies[TOKENS_NAME_DATA.refreshToken.name];

    const checkJWT = await fullCheckJWT(accessToken, refreshToken);

    if(checkJWT.code === 400) {
      return res.status(400).send(checkJWT.message);
    }

    if(checkJWT.code === 403) {
      return res.status(403).send(checkJWT.message);
    }

    req.token = accessToken;
    req.userData = checkJWT.userData;

    next();
  } catch (e) {
    res.status(400).send(e.message);
  }
}
