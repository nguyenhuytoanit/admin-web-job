import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  loading: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    catchError: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    startCall: (state, action) => {
      state.error = null;
      state.loading = true;
    },
    endCall: (state, action) => {
      state.loading = false;
      state.error = null;
    },
    login: (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
  },
});
