import {accessRole, isAuthorized, isRefreshToken, isVisitor} from "../../middlewares/guard";

import {
  loginController,
  logoutController,
  refreshTokenController,
  forgotPasswordController,
  resetPasswordController,
} from "../../controllers/auth";

import {
  loginMiddleware,
  forgotPasswordMiddleware,
  resetPasswordMiddleware,
} from "../../middlewares/auth";

import type {IAnyRouter} from "../index";

const AuthRouters: IAnyRouter = {
  prefix: 'auth',
  routeData: [
    {
      method: 'get',
      path: 'access-role',
      handler: [accessRole],
    },
    {
      method: 'post',
      path: 'login',
      authorization: [isVisitor],
      middleware: [loginMiddleware],
      handler: [loginController],
    },
    {
      method: 'post',
      path: 'logout',
      authorization: [isAuthorized],
      handler: [logoutController],
    },
    {
      method: 'post',
      path: 'refresh-token',
      authorization: [isRefreshToken],
      handler: [refreshTokenController],
    },
    {
      method: 'post',
      path: 'forgot-password',
      authorization: [isVisitor],
      middleware: [forgotPasswordMiddleware],
      handler: [forgotPasswordController],
    },
    {
      method: 'post',
      path: 'reset-password',
      authorization: [isVisitor],
      middleware: [resetPasswordMiddleware],
      handler: [resetPasswordController],
    }
  ],
};

export default AuthRouters;
