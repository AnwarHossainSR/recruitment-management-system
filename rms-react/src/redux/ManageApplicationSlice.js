import { createSlice } from "@reduxjs/toolkit";
import { notify } from "../services/Notification";
const initialState = {
  formisValid: false,
  errorTitle: "",
  titleValid: false,
  errorCompany: "",
  companyValid: false,
  errorLocation: "",
  locationValid: false,
  errorUrl: "",
  urlValid: false,
  errorDate: "",
  dateValid: false,
  errorDescription: "",
  descriptionValid: false,
  errorSalary: "",
  salaryValid: false,
  errorMessage: "",
  data: {},
};

const ManageApplicationSlice = createSlice({
  name: "manageApplication",
  initialState,
  reducers: {
    setapplications(state, { payload }) {},
    handlePageClick(state, { payload }) {},
  },
});

export const { setapplications, handlePageClick } =
  ManageApplicationSlice.actions;

export default ManageApplicationSlice.reducer;
