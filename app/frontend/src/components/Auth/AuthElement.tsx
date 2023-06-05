import {Navigate} from "react-router-dom";

import type {IUserState} from "../../store/reducers/user-slice";
import type {IRouters} from "../../screens/routers";

interface IChangeElement {
  userData: IUserState;
  item: IRouters;
  loadingUser: boolean;
}

const AuthElement = ({userData, item, loadingUser}: IChangeElement) => {
  if (loadingUser) {
    return <div/>
  }

  if (item.role === userData.role.name || item.role === 'ANY') {
    return item.element;
  }

  if (item.redirect) {
    return <Navigate to={item.redirect} replace/>
  }

  if (item.error) {
    return item.error;
  }

  return <div/>
};

export default AuthElement;
