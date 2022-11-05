import { createSlice } from "@reduxjs/toolkit";

const initialTemplateState = {
  loading: false,
  error: null,
};

export const templateSlice = createSlice({
  name: "template",
  initialState: initialTemplateState,
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
