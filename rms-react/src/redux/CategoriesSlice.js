import { createSlice } from "@reduxjs/toolkit";
import { deleteApiData } from "../api/ApiCall";
import Swal from "sweetalert2";
import { notify } from "../services/Notification";

const initialState = {
  formisValid: false,
  pageNumber: 1,
  categories: [],
  nameValid: false,
  errorName: "",
  data: {},
  errorMessage: "",
};

const CategoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    handleCategories(state, { payload }) {
      state.categories = payload;
    },
    handlePageClick(state, { payload }) {
      state.pageNumber = payload;
    },
    handleDeleteCat(state, { payload }) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const callFun = async () => {
            const response = await deleteApiData(`categories/${payload}`);
            if (response.status === true) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: response.message,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              console.log(response);
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: response.message,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          };
          callFun();
        }
      });
    },
    nameChangeHandler(state, { payload }) {
      if (payload.val.length <= 2) {
        state.errorName = "title must be grater than 2 character";
      } else {
        state.errorName = "";
        // state.formisValid = true;
        state.nameValid = true;
        state.data.name = payload.val;
      }
    },
    statusChangeHandler(state, { payload }) {
      state.data.status = payload.val;
    },
    startChangeHandler(state, { payload }) {
      state.data.period_start = payload.val;
    },
    endChangeHandler(state, { payload }) {
      state.data.period_end = payload.val;
    },
    errorChangeHandler(state, { payload }) {
      state.errorMessage = payload.val;
      notify(payload.val, "error");
    },
    checkForm(state) {
      if (state.errorName === "" && state.nameValid === true) {
        state.formisValid = true;
        return;
      } else {
        state.formisValid = false;
        state.errorMessage = "please provide all valid input !";
        notify("please provide all valid input !", "error");
        return;
      }
    },
  },
});

export const {
  handleCategories,
  handlePageClick,
  handleDeleteCat,
  nameChangeHandler,
  checkForm,
  errorChangeHandler,
  statusChangeHandler,
  startChangeHandler,
  endChangeHandler,
} = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
