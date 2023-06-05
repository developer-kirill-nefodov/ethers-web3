import * as Yup from "yup";

import type {IInputText} from "../../../components/Forms/InputText";

export interface IStateReset {
  password: string
  confirm_password: string
}

export const initialReset: IStateReset = {
  password: '',
  confirm_password: ''
};

export const inputsArrReset: IInputText[] = [
  {name: 'password', label: 'Password', required: true, type: 'password', placeholder: 'Your password please'},
  {name: 'confirm_password', label: 'Confirm Password', required: true, type: 'password', placeholder: 'Your email please'}
];

export const validateResetObj = {
  password: Yup.string()
    .max(255, 'Max length 255')
    .required('Required'),
}

export const validateReset = Yup.object({
  ...validateResetObj,
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required')
});
