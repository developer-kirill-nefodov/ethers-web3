import axios from "axios";
import {
  getAccessToken,
  setAccessToken,
  refreshAccessToken
} from "./utils/api";

import {store} from "./store";
import {accessRoleAction} from "./store/saga/actions/auth.actions";

import "./utils/translations/i18n";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

api.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;

    const data = await refreshAccessToken();

    if(data?.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      setAccessToken(data.token);
      store.dispatch(accessRoleAction());

      return api(originalRequest);
    }
  }
  return Promise.reject(error);
});

api.interceptors.request.use(async (config) => {
  const token = getAccessToken();

  config.headers.set('Authorization', token ? `Bearer ${token}` : '');

  return config;
}, async (error) => {
  return Promise.reject(error);
});


window.axios = api;
