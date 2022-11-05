import axios from "axios";
import { USER_INFO_LOGIN } from "constants/userInfo";

function getLocalToken() {
  const token = JSON.parse(localStorage.getItem(USER_INFO_LOGIN))?.accessToken;
  return token;
}

const setUserInfo = (data) => {
  localStorage.setItem(USER_INFO_LOGIN, JSON.stringify(data));
};

const axiosClient = axios.create({
  baseURL: window.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(async (config) => {
  if (JSON.parse(localStorage.getItem(USER_INFO_LOGIN))) {
    config.headers["Authorization"] = `Bearer ${getLocalToken()}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    const refreshToken = JSON.parse(localStorage.getItem(USER_INFO_LOGIN)).refreshToken;
    // if (error.response.status === 403) {
    //   return authApi.refreshToken(refreshToken).then((res) => {
    //     const { accessToken, refreshToken } = res;
    //     setUserInfo({
    //       accessToken: accessToken,
    //       refreshToken: refreshToken,
    //     });
    //     const config = error.response.config;
    //     config.headers["Authorization"] = `Bearer ${accessToken}`;
    //     return axiosClient(config);
    //   });
    // }
    return Promise.reject(error);
  }
);
export default axiosClient;
