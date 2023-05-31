export type INameTokens = 'confirm' | 'accessToken' | 'refreshToken'

export type I_TOKENS_NAME_DATA = {
  [key in INameTokens]: {
    name: string;
    age: number;
  }
}

export const LIFETIME_REFRESH_TOKEN =
  +process.env.SECOND_DAY * +(process.env.JWT_REFRASH_TIME.split('d').join(''));

export const LIFETIME_ACCESS_TOKEN = +(process.env.JWT_ACCESS_TIME.split('s').join(''));

export const LIFETIME_EMAIL_TOKEN = 300;

export const TOKENS_NAME_DATA: I_TOKENS_NAME_DATA = {
  confirm: {
    name: 'confirm',
    age: LIFETIME_EMAIL_TOKEN
  },
  accessToken: {
    name: 'accessToken',
    age: LIFETIME_ACCESS_TOKEN
  },
  refreshToken: {
    name:  'refreshToken',
    age: LIFETIME_REFRESH_TOKEN
  }
}
