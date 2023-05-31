import type {Response, NextFunction} from 'express';
import type {IRequestAuth} from "./user";

import {TOKENS_NAME_DATA} from "../../constants";
import {getValidJWT} from "../../helpers/token/token";

export const isRefreshToken = async (req: IRequestAuth, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies[TOKENS_NAME_DATA.refreshToken.name];

    if (!token) {
      return res.status(400).send('You are not authorized!');
    }

    const refreshToken = await getValidJWT(token, 'JWT_REFRESH_SECRET');

    if (refreshToken.code !== 200) {
      return res.status(401).send('Invalid token!');
    }

    req.userData = refreshToken.userData;

    next();
  } catch (e) {
    res.status(401).send('Your token is not valid.');
  }
}
