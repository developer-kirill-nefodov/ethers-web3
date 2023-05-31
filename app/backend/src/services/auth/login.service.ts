import {Response} from "express";
import {ColumnReference} from "sequelize";

import {TOKENS_NAME_DATA} from "../../constants";
import {createTokens} from "../../helpers/token/token";
import type {IRole} from "../../interfaces/models/user";

export interface IAuthLoginData {
  id: ColumnReference
  email: string
  password: string
  nickname: string
  role: IRole
}

export const authLoginService = async (res: Response, user: IAuthLoginData) => {
  const tokens = await createTokens({
    id: user.id,
    email: user.email,
    nickname: user.nickname,
    role: user.role,
  });

  res.status(200)
    .cookie(TOKENS_NAME_DATA.refreshToken.name, tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: TOKENS_NAME_DATA.refreshToken.age,
    })
    .json({
      token: tokens.accessToken,
      message: 'You have successfully logged!'
    });
}
