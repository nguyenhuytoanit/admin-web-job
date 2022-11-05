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

export const createTemplate = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.TemplateApi.createTemplate(params).finally(() => {
    dispatch(actions.endCall());
  });
};
