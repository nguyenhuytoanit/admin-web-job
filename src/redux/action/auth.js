import * as requestFromServer from "apis/authApi";
import { authSlice } from "./../slice/auth";

const { actions } = authSlice;

export const login = (params) => (dispatch) => {
  dispatch(actions.startCall());

  return requestFromServer.AuthApi.login(params)
    .then((res) => {
      dispatch(actions.login(res));
      return res;
    })
    .catch((error) => {
      dispatch(actions.catchError());
    });
};
