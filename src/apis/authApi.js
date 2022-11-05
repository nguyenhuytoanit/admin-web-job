import * as apis from "./allApi";
import axiosClient from "./axiosClient";

export const AuthApi = {
  login: (infoUser) => {
    const url = apis.apisAuth.apiLogin;
    return axiosClient.post(url, infoUser);
  },
};
