import {Response} from "express";

import UserModel from "../../models/user.model";
import {MESSAGE_RESET_PASSWORD} from "../../constants";

import {forgotPasswordService} from "../../services/auth";
import type {IForgotReq} from "../../middlewares/auth/forgot-password.middlewares";

export const forgotPasswordController = async (req: IForgotReq, res: Response) => {
  try {
    const {email} = req.body;

    const user = await UserModel.findOne({where: {email}});

    if(!user) {
      return res.status(200).send(MESSAGE_RESET_PASSWORD);
    }

    await forgotPasswordService(res, {
      id: user.dataValues.id,
      email
    });
  } catch (e) {
    res.status(400).send(e.message);
  }
}
