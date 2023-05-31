import {Response} from "express";

import {createTokens} from "../../helpers/token/token";
import {TOKENS_NAME_DATA} from "../../constants";

import type {IRequestAuth} from "../../middlewares/guard/user";

export const refreshTokenController = async (req: IRequestAuth, res: Response) => {
  try {
    const tokens = await createTokens(req.userData);

    res.status(200)
      .cookie(TOKENS_NAME_DATA.refreshToken.name, tokens.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: TOKENS_NAME_DATA.refreshToken.age,
      })
      .json({
        token: tokens.accessToken,
        message: 'Token updated!'
      });
  } catch (e) {
    res.status(400).send(e.message);
  }
}
