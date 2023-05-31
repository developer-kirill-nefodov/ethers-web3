import Joi from "joi";
import {emailValidator, passwordValidator} from "./auth.validators";

export const userCreateValidator = Joi.object({
  ...emailValidator,
  ...passwordValidator,
  nickname: Joi.string()
    .max(16)
    .required(),
});

export const userConfirmValidator = Joi.object({
  ...emailValidator,
  code:  Joi.string()
    .length(6)
    .required()
});
