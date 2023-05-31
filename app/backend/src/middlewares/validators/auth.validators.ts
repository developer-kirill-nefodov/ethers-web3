import Joi from "joi";

export const emailValidator = {
  email: Joi.string()
    .email({minDomainSegments: 2})
    .max(42)
    .required(),
}

export const passwordValidator = {
  password: Joi.string()
    .min(4)
    .max(255)
    .required()
}

export const loginValidator = Joi.object({
 ...emailValidator,
 ...passwordValidator
});

export const authCreateValidator = Joi.object({
  ...emailValidator,
  ...passwordValidator,
  nickname: Joi.string()
    .max(16)
    .required(),
});

export const authConfirmValidator = Joi.object({
  ...emailValidator,
  code:  Joi.string()
    .length(6)
    .required()
});

export const forgotPasswordValidator = Joi.object(emailValidator);

export const resetPasswordValidator = Joi.object({
  ...passwordValidator,
  reset: Joi.string()
    .min(40)
    .message('Damaged token!')
    .max(100)
    .message('Damaged token!')
    .required()
});
