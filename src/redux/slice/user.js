import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    catchError: (state) => {
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
  },
});
