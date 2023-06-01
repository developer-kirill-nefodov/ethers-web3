import Home from "./Home";

export interface IRouters {
  path: string
  element: JSX.Element
  role: 'VISITOR' | 'USER' | 'MODERATOR' | 'ADMIN' | 'ANY'
  redirect?: string
  error?: JSX.Element
}

export const routers: IRouters[] = [

  {
    path: '/',
    element: <Home/>,
    role: 'ANY'
  }
];
