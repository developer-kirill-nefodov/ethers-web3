import * as Yup from "yup";

import {validateForgotObj} from "./forgot";
import {validateResetObj} from "./reset";
import type {IInputText} from "../../../components/Forms/InputText";

export interface IStateLogin {
  email: string
  password: string
}

export const initialLogin: IStateLogin = {
  email: '',
  password: ''
};

export const inputsArrLogin: IInputText[] = [
  {name: 'email', label: 'Email', required: true, type: 'email', placeholder: 'Your email please'},
  {name: 'password', label: 'Password', required: true, type: 'password', placeholder: 'Your password please'},
];

export const validateLoginObj = {
  ...validateForgotObj,
  ...validateResetObj
}

export const validateLogin = Yup.object(validateLoginObj);
