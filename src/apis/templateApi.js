import * as apis from "./allApi";
import axiosClient from "./axiosClient";

export const TemplateApi = {
  getListTemplate: () => {
    const url = apis.apisTemplate.apiListTemplate;
    return axiosClient.get(url);
  },
  getTemplateDetail: (templateId) => {
    const url = apis.apisTemplate.apiTemplateDetail;
    return axiosClient.get(url, { params: { id: templateId } });
  },
  createTemplate: (params) => {
    const url = apis.apisTemplate.apiCreateTemplate;
    return axiosClient.post(url, params);
  },
  updateTemplate: (params) => {
    const url = apis.apisTemplate.apiUpdateTemplate(params.templateId);
    return axiosClient.post(url, {
      name: params.name,
      code: params.code,
    });
  },
  deleteTemplate: (params) => {
    const url = apis.apisTemplate.apiDeleteTemplate(params.templateId);
    return axiosClient.post(url);
  },
};