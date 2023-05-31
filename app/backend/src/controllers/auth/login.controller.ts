import {Response} from "express";

import UserModel from "../../models/user.model";

import {validatePassword} from "../../helpers/user";
import {authLoginService} from "../../services/auth";

import type {ILoginReq} from "../../middlewares/auth/login.middlewares";

export const loginController = async (req: ILoginReq, res: Response) => {
  try {
    const {email, password} = req.body;

    const user = await UserModel.findOne({where: {email}});

    if(!user || !validatePassword(user, password)) {
      return res.status(400).send('Email or password is not correct!');
    }

    await authLoginService(res, user.dataValues);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
