import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice";
import addJobReducer from "./AddJobSlice";
import applicationReducer from "./ManageApplicationSlice";
export default configureStore({
  reducer: {
    login: loginReducer,
    addJob: addJobReducer,
    application: applicationReducer,
  },
});
