import {Response} from "express";

import UserModel from "../../models/user.model";

import {userPassword} from "../../helpers/user";
import type {IForgotData} from "./forgot-password.service";

export const resetPasswordService = async (res: Response, user: IForgotData, password: string) => {
  await UserModel.update({
    password: userPassword(password)
  }, {where: {id: user.id, email: user.email}});

  res.status(200).send('Your password has been successfully changed!');
}
