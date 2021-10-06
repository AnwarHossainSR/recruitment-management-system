import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice";
import addJobReducer from "./AddJobSlice";
import applicationReducer from "./ManageApplicationSlice";
import categoryReducer from "./CategoriesSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    addJob: addJobReducer,
    application: applicationReducer,
    category: categoryReducer,
  },
});
