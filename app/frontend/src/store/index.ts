import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) => {
  return getDefaultMiddleWare({ thunk: false }).prepend(sagaMiddleware);
}
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
