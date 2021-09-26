import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice";
import addJobReducer from "./AddJobSlice";
export default configureStore({
  reducer: {
    login: loginReducer,
    addJob: addJobReducer,
  },
});
