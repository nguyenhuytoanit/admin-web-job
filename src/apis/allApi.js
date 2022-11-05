export const apisAuth = {
  apiLogin: "/api/auth/login",
  apiLogout: "/api/auth/logout",
};

export const apisTemplate = {
  apiListTemplate: "/api/template/list",
  apiTemplateDetail: "/api/template/get",
  apiCreateTemplate: "/api/template/create",
};

export const apisGroup = {
  apiListGroup: "/api/group/list",
  apiCreateGroup: "/api/group/create",
  apiGroupDetail: "/api/group/get",
  apiGroupUpdate: (groupId) => `/api/group/update?id=${groupId}`,
  apiGroupDelete: (groupId) => `/api/group/delete?id=${groupId}`,
};
