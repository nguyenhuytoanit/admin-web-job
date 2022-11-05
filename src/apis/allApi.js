export const apisAuth = {
  apiLogin: "/api/auth/login",
  apiLogout: "/api/auth/logout",
};

export const apisTemplate = {
  apiListTemplate: "/api/template/list",
  apiTemplateDetail: "/api/template/get",
  apiCreateTemplate: "/api/template/create",
  apiUpdateTemplate: (templateId) => `/api/template/update?id=${templateId}`,
  apiDeleteTemplate: (templateId) => `/api/template/delete?id=${templateId}`,
};

export const apisGroup = {
  apiListGroup: "/api/group/list",
  apiCreateGroup: "/api/group/create",
  apiGroupDetail: "/api/group/get",
  apiGroupUpdate: (groupId) => `/api/group/update?id=${groupId}`,
  apiGroupDelete: (groupId) => `/api/group/delete?id=${groupId}`,
};

export const apisUser = {
  apiListUser: "/api/user/list",
  apiCreateUser: "/api/user/create",
  apiUserDetail: "/api/user/get",
  apiUserUpdate: (userId) => `/api/user/update?id=${userId}`,
  apiUserDelete: (userId) => `/api/user/delete?id=${userId}`,
};
