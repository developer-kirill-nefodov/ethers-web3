import {all} from "@redux-saga/core/effects";

import {accessRoleWatcher, loginWatcher} from "./auth";

export default function* rootSaga() {
  yield all([accessRoleWatcher(), loginWatcher()]);
}
