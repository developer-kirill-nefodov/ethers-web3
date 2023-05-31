import crypto from "crypto";
import {gen} from 'n-digit-token';

type INumberToken = number | undefined

export const generatorNumberToken = (num: INumberToken = 6): string => {
  return gen(num).toString();
}

export const generateTextToken = (): string => {
  return crypto.randomBytes(50).toString('base64');
}

interface IUser {
  password: string
}

export function validatePassword(user: IUser, inputPassword: string): boolean {
  return user.password === userPassword(inputPassword);
}

export const userPassword = (password: string): string => {
  return crypto.pbkdf2Sync(
    password,
    '(_xxx_)(SALT)(_xxx_)',
    1000,
    64,
    'sha512'
  ).toString('hex')
}
