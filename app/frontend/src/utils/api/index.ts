import {AxiosResponse} from "axios";
import {ApiUrls} from "../constants/api-urls";

interface IRefreshAccessTokenRes extends AxiosResponse {
  data: {
    token: string;
    message: string;
  }
}

export const refreshAccessToken = async () => {
  try {
    const {data}: IRefreshAccessTokenRes =
      await window.axios.post(ApiUrls.auth.refreshToken);

    return data;
  } catch (e) {}
}

export const getAccessToken = () => {
  return localStorage.getItem('access-token');
}

export const setAccessToken = (token: string) => {
  localStorage.setItem('access-token', token);
}

export const deleteAccessToken = () => {
  localStorage.removeItem('access-token');
}
