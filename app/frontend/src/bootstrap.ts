import axios from "axios";
import {deleteAccessToken, getAccessToken, refreshAccessToken, setAccessToken} from "./utils/api";

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

    if(data?.accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      setAccessToken(data.accessToken);

      return api(originalRequest);
    }

    deleteAccessToken()
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
