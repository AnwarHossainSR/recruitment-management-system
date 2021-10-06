import { createSlice } from "@reduxjs/toolkit";
import { deleteApiData, fetchApiData } from "../api/ApiCall";
import { notify } from "../services/Notification";
import Swal from "sweetalert2";

const initialState = {
  formisValid: false,
  pageNumber: 1,
  categories: [],
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
              console.log(response);
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
  },
});

export const { handleCategories, handlePageClick, handleDeleteCat } =
  CategoriesSlice.actions;

export default CategoriesSlice.reducer;
