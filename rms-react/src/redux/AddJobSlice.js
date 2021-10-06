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

const addJobSlice = createSlice({
  name: "addJob",
  initialState,
  reducers: {
    titleChangeHandler(state, { payload }) {
      if (payload.val.length <= 5) {
        state.errorTitle = "title must be grater than 5 character";
      } else {
        state.errorTitle = "";
        // state.formisValid = true;
        state.titleValid = true;
        state.data.title = payload.val;
      }
    },
    companyChangeHandler(state, { payload }) {
      if (payload.val.length <= 5) {
        state.errorCompany = "company must be grater than 5 character";
      } else {
        state.errorCompany = "";
        // state.formisValid = true;
        state.companyValid = true;
        state.data.company = payload.val;
      }
    },
    descriptionChangeHandler(state, { payload }) {
      if (payload.val.length <= 150) {
        state.errorDescription =
          "description must be grater than 150 character";
      } else {
        state.errorDescription = "";
        // state.formisValid = true;
        state.descriptionValid = true;
        state.data.description = payload.val;
      }
    },
    dateChangeHandler(state, { payload }) {
      if (payload.val.length === "") {
        state.errorDate = "please select a date";
      } else {
        state.errorDate = "";
        // state.formisValid = true;
        state.dateValid = true;
        state.data.close_date = payload.val;
      }
    },
    tagChangeHandler(state, { payload }) {
      state.errorUrl = "";
      state.urlValid = true;
      state.data.tag = payload.val;
    },
    urlChangeHandler(state, { payload }) {
      if (payload.val.length <= 2) {
        state.errorUrl = "email or url must be required !";
      } else {
        state.errorUrl = "";
        state.urlValid = true;
        state.data.email = payload.val;
      }
    },
    salaryChangeHandler(state, { payload }) {
      if (payload.val.length <= 4) {
        state.errorSalary = "salary must be grater than 4 digit !";
      } else {
        state.errorSalary = "";
        state.salaryValid = true;
        state.data.salary = payload.val;
      }
    },
    locationChangeHandler(state, { payload }) {
      if (payload.val.length <= 5) {
        state.errorLocation = "company must be grater than 5 character";
      } else {
        state.errorLocation = "";
        state.locationValid = true;
        state.data.location = payload.val;
      }
    },
    catHandleChange(state, { payload }) {
      state.data.cat_id = payload.val;
    },
    typeChangeHandler(state, { payload }) {
      console.log(payload.val);
      state.data.type = payload.val;
    },
    errorChangeHandler(state, { payload }) {
      state.errorMessage = payload.val;
    },
    checkForm(state) {
      if (
        state.errorTitle === "" &&
        state.errorCompany === "" &&
        state.errorLocation === "" &&
        state.errorUrl === "" &&
        state.errorDate === "" &&
        state.errorSalary === "" &&
        state.errorDescription === ""
      ) {
        if (
          state.titleValid === false ||
          state.companyValid === false ||
          state.locationValid === false ||
          state.urlValid === false ||
          state.salaryValid === false ||
          state.dateValid === false
        ) {
          state.formisValid = false;
          notify("please provide all required input !", "error");
          return;
        } else {
          state.formisValid = true;
          return;
        }
      } else {
        state.formisValid = false;
        state.errorMessage = "please provide all valid input !";
        notify("please provide all valid input !", "error");
        return;
      }
    },
  },
});

//const { reducer, actions } = addJobSlice;

export const {
  titleChangeHandler,
  companyChangeHandler,
  descriptionChangeHandler,
  dateChangeHandler,
  tagChangeHandler,
  urlChangeHandler,
  locationChangeHandler,
  salaryChangeHandler,
  typeChangeHandler,
  catHandleChange,
  errorChangeHandler,
  checkForm,
} = addJobSlice.actions;

export default addJobSlice.reducer;
