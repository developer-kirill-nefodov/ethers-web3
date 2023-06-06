import {takeEvery, call, put} from "@redux-saga/core/effects";

import {ApiUrls} from "../../../utils/constants/api-urls";
import {LOGIN_ACTION} from "../../constants";

import {setAccessToken} from "../../../utils/api";
import {accessRoleAction} from "../actions/auth.actions";
import type {IStateLogin} from "../../../utils/validations/auth/login";

interface ILoginReq {
  type: 'LOGIN_ACTION'
  payload: IStateLogin
}

interface ILoginRes {
  message: string;
  token: string;
}

function* loginReq({payload}: ILoginReq) {
  try {
    const {data}: { data: ILoginRes } = yield call(window.axios.post, ApiUrls.auth.login, payload);

    setAccessToken(data.token);
    yield put(accessRoleAction());
  } catch (e) {

  }
}

export function* loginWatcher() {
  yield takeEvery(LOGIN_ACTION, loginReq);
}
