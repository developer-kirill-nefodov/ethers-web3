import {takeEvery, call, put} from "@redux-saga/core/effects";

import {ApiUrls} from "../../../utils/constants/api-urls";
import {LOGOUT_ACTION} from "../../constants";

import {deleteAccessToken} from "../../../utils/api";
import {accessRoleAction} from "../actions/auth.actions";
import {toast} from "../../../components/Toastify";

function* logoutReq() {
  try {
    yield call(window.axios.post, ApiUrls.auth.logout);
    deleteAccessToken();
    toast('You have successfully logged out of your account', 'success');
    yield put(accessRoleAction());
  } catch (e: any) {
    toast(e.response.data, 'error');
  }
}

export function* logoutWatcher() {
  yield takeEvery(LOGOUT_ACTION, logoutReq);
}
