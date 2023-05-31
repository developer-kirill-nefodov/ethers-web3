import {serialize} from 'cookie';

import {INameTokens, TOKENS_NAME_DATA} from "../../constants/token";

export const createSerialize = (data: string, nameToken: INameTokens) => {
  return serialize(TOKENS_NAME_DATA[nameToken].name, data, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: TOKENS_NAME_DATA[nameToken].age,
  });
}
