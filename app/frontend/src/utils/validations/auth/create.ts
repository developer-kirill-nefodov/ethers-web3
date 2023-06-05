import * as Yup from "yup";

import {IStateLogin, validateLoginObj} from "./login";
import type {IInputText} from "../../../components/Forms/InputText";

export interface IStateCreate extends IStateLogin {
  nickname: string
}

export const initialCreate: IStateCreate = {
  nickname: '',
  email: '',
  password: ''
};

export const inputsArrCreate: IInputText[] = [
  {name: 'email', label: 'Email', required: true, type: 'email', placeholder: 'Your email please'},
  {name: 'password', label: 'Password', required: true, type: 'password', placeholder: 'Your password please'},
  {name: 'confirm-password', label: 'Confirm Password', required: true, type: 'password', placeholder: 'Your password please'}
];

export const validateCreate = Yup.object({
  nickname: Yup.string()
    .max(16, 'Max length 16')
    .required('Required'),
  ...validateLoginObj
});
