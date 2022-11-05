import * as requestFromServer from "apis/userApi";
import { userSlice } from "./../slice/user";

const { actions } = userSlice;

export const getListUser = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.userApi
    .getListUser(params)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      dispatch(actions.catchError());
    });
};

export const createUser = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.userApi.createUser(params).finally((res) => {
    dispatch(actions.catchError());
  });
};

export const getUserDetail = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.userApi
    .getUserDetail(params)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      dispatch(actions.catchError());
    });
};

export const updateUser = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.userApi.updateUser(params).finally((res) => {
    dispatch(actions.catchError());
  });
};

export const deleteUser = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.userApi.deleteUser(params).finally((res) => {
    dispatch(actions.catchError());
  });
};
