import {takeEvery, call, put} from "@redux-saga/core/effects";

import {ApiUrls} from "../../../utils/constants/api-urls";
import {IUserState, setUserData} from "../../reducers/user-slice";
import {ACCESS_ROLE} from "../../constants";

function* accessRoleReq() {
  try {
    const {data}: { data: IUserState } = yield call(window.axios.get, ApiUrls.auth.accessRole);
    yield put(setUserData(data));
  } catch (e) {

  }
}

export function* accessRoleWatcher() {
  yield takeEvery(ACCESS_ROLE, accessRoleReq);
}
