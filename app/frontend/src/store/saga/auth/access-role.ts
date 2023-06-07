import {takeEvery, call, put} from "@redux-saga/core/effects";

import {ApiUrls} from "../../../utils/constants/api-urls";
import {ACCESS_ROLE} from "../../constants";

import {toast} from "../../../components/Toastify";
import {setLoadingData} from "../../reducers/loading-slice";
import {IUserState, setUserData} from "../../reducers/user-slice";

function* accessRoleReq() {
  try {
    const {data}: { data: IUserState } = yield call(window.axios.get, ApiUrls.auth.accessRole);
    yield put(setUserData(data));
    yield put(setLoadingData({key: 'loadingUser', value: false}))
  } catch (e: any) {
    toast(e.response.data, 'error');
  }
}

export function* accessRoleWatcher() {
  yield takeEvery(ACCESS_ROLE, accessRoleReq);
}
