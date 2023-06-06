import {all} from "@redux-saga/core/effects";

import {
  accessRoleWatcher,
  loginWatcher,
  logoutWatcher
} from "./auth";

export default function* rootSaga() {
  yield all([
    accessRoleWatcher(),
    loginWatcher(),
    logoutWatcher()
  ]);
}
