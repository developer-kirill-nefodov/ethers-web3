import {Response} from "express";
import {ColumnReference} from "sequelize";

import {MESSAGE_RESET_PASSWORD} from "../../constants";
// import {addJobEmail} from "../../workers/email.queue";

export interface IForgotData {
  id: ColumnReference
  email: string
}

export const forgotPasswordService = async (res: Response, data: IForgotData) => {
  // await addJobEmail({
  //   name: 'forgot',
  //   ...data
  // });

  res.status(200).send(MESSAGE_RESET_PASSWORD);
}
