import {all} from "@redux-saga/core/effects";

import {accessRoleWatcher} from "./auth/access-role";

function* rootSaga() {
  yield all([accessRoleWatcher]);
}

export default rootSaga;
