import { createSlice } from "@reduxjs/toolkit";

const initialGroupState = {
  loading: false,
  error: null,
};

export const groupSlice = createSlice({
  name: "group",
  initialState: initialGroupState,
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
