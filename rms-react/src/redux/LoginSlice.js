import { createSlice } from "@reduxjs/toolkit";
import { notify } from "../services/Notification";
import axios from "../config";

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
    logOut(state) {
      axios
        .post("auth/logout")
        .then((response) => {
          localStorage.clear();
          notify(response.data.message, "success");
        })
        .catch(function (response) {
          notify(response.response.data.message, "error");
        });
    },
  },
});

//const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, logOut, loginFail, errorMessage } =
  loginSlice.actions;

export default loginSlice.reducer;
