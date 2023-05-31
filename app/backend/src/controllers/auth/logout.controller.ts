import {Response} from "express";
import {redis} from "../../db";

import {TOKENS_NAME_DATA} from "../../constants";
import type {IRequestAuth} from "../../middlewares/guard/user";

export const logoutController = async (req: IRequestAuth, res: Response) => {
  try {
   const {email} = req.userData;

   await redis.del(`session-access:${email}`);
   await redis.del(`session-refresh:${email}`);

   res.clearCookie(TOKENS_NAME_DATA.refreshToken.name);

   res.status(200).send('You have successfully exited!');
  } catch (e) {
    res.status(400).send(e.message);
  }
}
