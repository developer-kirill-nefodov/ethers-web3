import {takeEvery, call, put} from "@redux-saga/core/effects";

import {deleteAccessToken} from "../../../utils/api";
import {accessRoleAction} from "../actions/auth.actions";

import {ApiUrls} from "../../../utils/constants/api-urls";
import {LOGOUT_ACTION} from "../../constants";

function* logoutReq() {
  try {
    yield call(window.axios.post, ApiUrls.auth.logout);
    deleteAccessToken();
    yield put(accessRoleAction());
  } catch (e) {

  }
}

export function* logoutWatcher() {
  yield takeEvery(LOGOUT_ACTION, logoutReq);
}
