import { createSlice } from "@reduxjs/toolkit";
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
    loginPending(state, { payload }) {
      state.isLoading = payload;
    },
    loginFail(state, payload) {
      state.isAuth = false;
      state.isLoading = false;
      state.error = payload.payload;
      notify(payload.payload, "error");
    },
    loginSuccess(state, payload) {
      state.isAuth = true;
      state.error = "";
      notify(payload.payload, "success");
    },
    logOut(state) {
      const fetchData = async () => {
        const response = await storeApiData("auth/logout");
        if (response.status === true) {
          localStorage.clear();
          notify(response.message, "success");
        } else {
          notify(response.message, "error");
        }
      };
      fetchData();
    },
  },
});

export const { loginPending, loginSuccess, logOut, loginFail, errorMessage } =
  loginSlice.actions;

export default loginSlice.reducer;
