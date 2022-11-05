import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
