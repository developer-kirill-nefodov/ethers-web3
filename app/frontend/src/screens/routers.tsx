import HomePage from "./Home";
import NotFoundPage from "./NotFound";
import {authRouters} from "./Auth";
import {NavigateUrls} from "../utils/constants/navigate-urls";

export interface IRouters {
  path: string
  element: JSX.Element
  role: 'VISITOR' | 'USER' | 'MODERATOR' | 'ADMIN' | 'ANY'
  redirect?: string
  error?: JSX.Element
}

export const routers: IRouters[] = [
  ...authRouters,
  {
    path: NavigateUrls.home,
    element: <HomePage/>,
    role: 'ANY'
  },
  {
    path: NavigateUrls.notFound,
    element: <NotFoundPage/>,
    role: 'ANY'
  }
];
