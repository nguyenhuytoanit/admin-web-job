import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth";
import { groupSlice } from "./slice/group";
import { templateSlice } from "./slice/template";
import { userSlice } from "./slice/user";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  template: templateSlice.reducer,
  group: groupSlice.reducer,
});
