import type {NextFunction, Request, Response} from "express";

import {fullCheckJWT} from "../../helpers/token/token";
import {TOKENS_NAME_DATA} from "../../constants";

export const isVisitor = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.split(' ')[1];
  const refreshToken = req.cookies[TOKENS_NAME_DATA.refreshToken.name];

  const checkJWT = await fullCheckJWT(accessToken, refreshToken);

  if (checkJWT.code !== 400) {
    res.status(400).send("You are authorized!");
  } else {
    next();
  }
}
