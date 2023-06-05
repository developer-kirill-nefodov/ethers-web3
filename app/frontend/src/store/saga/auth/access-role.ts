import {takeEvery, call, put} from "@redux-saga/core/effects";

import {ApiUrls} from "../../../utils/constants/api-urls";
import {ACCESS_ROLE} from "../../constants";
import {IUserState, setUserData} from "../../reducers/user-slice";
import {setLoadingData} from "../../reducers/loading-slice";

function* accessRoleReq() {
  try {
    const {data}: { data: IUserState } = yield call(window.axios.get, ApiUrls.auth.accessRole);
    yield put(setUserData(data));
    yield put(setLoadingData({key: 'loadingUser', value: false}))
  } catch (e) {

  }
}

export function* accessRoleWatcher() {
  yield takeEvery(ACCESS_ROLE, accessRoleReq);
}
