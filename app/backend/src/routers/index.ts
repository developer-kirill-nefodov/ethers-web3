import {Router} from "express";

import AuthRouters from "./auth.router";
import TranslationRouter from "./translation.router";

export interface IAnyRouter {
  prefix: string;
  routeData: {
    method: 'get' | 'post';
    path: string;
    authorization?: any;
    middleware?: any;
    handler: any;
  }[]
}

export const routers = () => {
  const router = Router();
  const routers = [AuthRouters, TranslationRouter];

  routers.map(({prefix, routeData}) => {
    routeData.map(({method, path, authorization = [], middleware = [], handler = []}) => {
      router[method](`/${prefix}/${path}`, ...authorization, ...middleware, ...handler);
    })
  });

  return router;
}
