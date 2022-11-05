import * as requestFromServer from "apis/groupApi";
import { groupSlice } from "./../slice/group";

const { actions } = groupSlice;

export const getListGroup = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.groupApi
    .getListGroup(params)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      dispatch(actions.catchError());
    });
};

export const createGroup = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.groupApi.createGroup(params).finally((res) => {
    dispatch(actions.catchError());
  });
};

export const getDetailGroup = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.groupApi
    .getDetailGroup(params)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      dispatch(actions.catchError());
    });
};

export const updateGroup = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.groupApi.updateGroup(params).finally((res) => {
    dispatch(actions.catchError());
  });
};

export const deleteGroup = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.groupApi.deleteGroup(params).finally((res) => {
    dispatch(actions.catchError());
  });
};
