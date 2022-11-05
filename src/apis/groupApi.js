import * as apis from "./allApi";
import axiosClient from "./axiosClient";

export const groupApi = {
  getListGroup: () => {
    const url = apis.apisGroup.apiListGroup;
    return axiosClient.get(url);
  },
  createGroup: (params) => {
    const url = apis.apisGroup.apiCreateGroup;
    return axiosClient.post(url, params);
  },
  getDetailGroup: (params) => {
    const url = apis.apisGroup.apiGroupDetail;
    return axiosClient.get(url, { queryParams: params });
  },
  updateGroup: (params) => {
    const url = apis.apisGroup.apiGroupUpdate(params.groupId);
    return axiosClient.post(url, { name: params.name, code: params.code });
  },
  deleteGroup: (params) => {
    const url = apis.apisGroup.apiGroupDelete(params.groupId);
    return axiosClient.post(url);
  },
};
