import {takeEvery, call, put} from "@redux-saga/core/effects";

import {ApiUrls} from "../../../utils/constants/api-urls";
import {LOGIN_ACTION} from "../../constants";

import {setAccessToken} from "../../../utils/api";
import {accessRoleAction} from "../actions/auth.actions";
import {toast} from "../../../components/Toastify";
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
    toast('You have successfully logged into your account!', 'success');
    yield put(accessRoleAction());
  } catch (e: any) {
    toast(e.response.data, 'error');
  }
}

export function* loginWatcher() {
  yield takeEvery(LOGIN_ACTION, loginReq);
}
