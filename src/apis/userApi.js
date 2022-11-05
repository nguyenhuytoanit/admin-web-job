import * as apis from "./allApi";
import axiosClient from "./axiosClient";

export const userApi = {
  getListUser: () => {
    const url = apis.apisUser.apiListUser;
    return axiosClient.get(url);
  },
  getUserDetail: (userId) => {
    const url = apis.apisUser.apiUserDetail;
    return axiosClient.get(url, { params: { id: userId } });
  },
  createUser: (params) => {
    const url = apis.apisUser.apiCreateUser;
    return axiosClient.post(url, params);
  },
  updateUser: (params) => {
    const url = apis.apisUser.apiUserUpdate(params.userId);
    return axiosClient.post(url, {
      name: params.name,
      code: params.code,
    });
  },
  deleteUser: (params) => {
    const url = apis.apisUser.apiUserDelete(params.userId);
    return axiosClient.post(url);
  },
};
