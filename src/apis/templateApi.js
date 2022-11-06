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
    var bodyFormData = new FormData();
    Object.keys(params).forEach((key) => {
      bodyFormData.append(key, params[key]);
    });
    const url = apis.apisTemplate.apiCreateTemplate;
    return axiosClient({
      method: "post",
      url: url,
      data: bodyFormData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
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
  updateBlockTemplate: (params) => {
    const url = apis.apisTemplate.apiUpdateBlock(params.id);
    return axiosClient.post(url, params);
  },
  createBlockTemplate: (params) => {
    const url = apis.apisTemplate.apiCreateBlock;
    return axiosClient.post(url, params);
  },
};
