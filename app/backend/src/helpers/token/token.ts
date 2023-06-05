import jwt from 'jsonwebtoken';
import {ColumnReference} from "sequelize";
import {redis} from "../../db";

import type {IRole} from "../../interfaces/models/user";
import {LIFETIME_ACCESS_TOKEN, LIFETIME_REFRESH_TOKEN} from "../../constants";

export interface IUserData {
  id: ColumnReference
  email: string
  role: IRole
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}

type ICheckTokenTypes = 'JWT_ACCESS_SECRET' | 'JWT_REFRESH_SECRET';

export const createTokens = async (data: IUserData): Promise<ITokens> => {
  const accessToken = jwt.sign({data},
    process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.JWT_ACCESS_TIME
    });
  const refreshToken = jwt.sign({data},
    process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_REFRASH_TIME
    });

  await redis.SETEX(
    `session-JWT_ACCESS_SECRET:${data.email}`,
    LIFETIME_ACCESS_TOKEN,
    accessToken
  );

  await redis.SETEX(
    `session-JWT_REFRESH_SECRET:${data.email}`,
    LIFETIME_REFRESH_TOKEN,
    refreshToken
  );

  return {
    accessToken,
    refreshToken
  }
}


export const fullCheckJWT = async (accessToken: string, refreshToken: string) => {
  const accessData = await getValidJWT(accessToken, 'JWT_ACCESS_SECRET');
  const refreshData = await getValidJWT(refreshToken, 'JWT_REFRESH_SECRET');

  if(accessData.code === 400 && refreshData.code === 400) {
    return {
      code: 400,
      message: 'Bad Request!'
    }
  }

  if(accessData.code === 400 && refreshData.code === 200) {
    return {
      code: 403,
      message: 'Refresh token!'
    }
  }

  return {
    code: 200,
    userData: accessData.userData
  }
}

export const getValidJWT = async (token: string, type: ICheckTokenTypes) => {
  try {
    const encode = jwt.verify(token, process.env[type]);
    const access = await redis.get(`session-${type}:${encode.data.email}`);

    if(access && token === access) {
      return {
        code: 200,
        message: 'Token valid!!!',
        userData: encode.data
      }
    }
  } catch (e) {}

  return {
    code: 400,
    message: 'Token not valid!',
  }
}
