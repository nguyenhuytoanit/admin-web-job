import * as requestFromServer from "apis/templateApi";
import { templateSlice } from "./../slice/template";

const { actions } = templateSlice;

export const getListTemplate = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.TemplateApi.getListTemplate(params)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      dispatch(actions.catchError());
    });
};

export const getTemplateDetail = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.TemplateApi.getTemplateDetail(params)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      dispatch(actions.catchError());
    });
};

export const createTemplate = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.TemplateApi.createTemplate(params).finally(() => {
    dispatch(actions.endCall());
  });
};

export const updateTemplate = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.TemplateApi.updateTemplate(params).finally((res) => {
    dispatch(actions.catchError());
  });
};

export const deleteTemplate = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.TemplateApi.deleteTemplate(params).finally((res) => {
    dispatch(actions.catchError());
  });
};
