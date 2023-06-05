import userReducer from './user-slice';
import loadingReducer from './loading-slice';

const rootReducer = {
  userData: userReducer,
  loadingData: loadingReducer
}

export default rootReducer;
