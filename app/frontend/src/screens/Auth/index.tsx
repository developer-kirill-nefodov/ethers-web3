import LoginPage from "./Login";
import CreatePage from "./Create";

import {NavigateUrls} from "../../utils/constants/navigate-urls";
import type {IRouters} from "../routers";

export const authRouters: IRouters[] = [
  {
    path: NavigateUrls.auth.login,
    role: 'VISITOR',
    redirect: NavigateUrls.home,
    element: <LoginPage/>
  },
  {
    path: NavigateUrls.auth.create,
    role: 'VISITOR',
    redirect: NavigateUrls.home,
    element: <CreatePage/>
  }
];
