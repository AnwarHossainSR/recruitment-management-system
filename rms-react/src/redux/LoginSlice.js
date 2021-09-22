import { createSlice } from "@reduxjs/toolkit";
import axios from "../config";
import { notify } from "../services/Notification";
import { storeApiData } from "../api/ApiCall";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    errorMessage(state) {
      state.isAuth = false;
      state.error = "Please provide all valid credentials !";
      notify("provide valid credentials !", "error");
    },
    loginFail(state, payload) {
      state.isAuth = false;
      state.error = payload.payload;
      notify(payload.payload, "error");
    },
    loginSuccess(state, payload) {
      state.isAuth = true;
      state.error = "";
      notify(payload.payload, "success");
    },
  },
});

//const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail, errorMessage } =
  loginSlice.actions;

export default loginSlice.reducer;
