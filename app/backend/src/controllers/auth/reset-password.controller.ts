import {Response} from "express";
import {redis} from "../../db";

import {resetPasswordService} from "../../services/auth";
import type {IResetReq} from "../../middlewares/auth/reset-password.middlewares";

export const resetPasswordController = async (req: IResetReq, res: Response) => {
  try {
    const {reset, password} = req.body;

    const user = await redis.get(`forgot-password:${reset}`);

    if(!user) {
      return res.status(400).send('Token not valid!');
    }

    await resetPasswordService(res, JSON.parse(user), password);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
