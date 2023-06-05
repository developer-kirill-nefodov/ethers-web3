import Joi from "joi";

export const getByLanguageValidator = Joi.object({
  lang: Joi.string()
    .min(2)
    .max(2)
    .required(),
});
