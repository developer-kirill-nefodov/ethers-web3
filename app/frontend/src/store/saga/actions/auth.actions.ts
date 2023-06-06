import {ACCESS_ROLE, LOGIN_ACTION, LOGOUT_ACTION} from "../../constants";

import type {IStateLogin} from "../../../utils/validations/auth/login";

export const accessRoleAction = () => ({
  type: ACCESS_ROLE
});

export const loginAction = (payload: IStateLogin) => ({
  type: LOGIN_ACTION,
  payload
});

export const logoutAction = () => ({
  type: LOGOUT_ACTION
});
