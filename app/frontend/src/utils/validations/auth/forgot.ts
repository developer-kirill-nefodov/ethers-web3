import * as Yup from "yup";

export interface IStateForgot {
  email: string
}

export const initialForgot: IStateForgot = {
  email: '',
};

export const validateForgotObj = {
  email: Yup.string()
    .email('Invalid email address')
    .max(42, 'Max length 42')
    .required('Required')
}

export const validateForgot = Yup.object(validateForgotObj);
