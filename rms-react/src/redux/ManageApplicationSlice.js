import { createSlice } from "@reduxjs/toolkit";
import { deleteApiData, fetchApiData } from "../api/ApiCall";
import { notify } from "../services/Notification";
import Swal from "sweetalert2";

const initialState = {
  formisValid: false,
  pageNumber: 1,
  catPageNumber: 1,
  categories: [],
  applications: [],
};

const ManageApplicationSlice = createSlice({
  name: "manageApplication",
  initialState,
  reducers: {
    setapplications(state, { payload }) {
      state.applications = payload;
      //console.log(payload);
    },
    setCategoriesApplications(state, { payload }) {
      state.categories = payload;
    },
    handlePageClick(state, { payload }) {
      state.pageNumber = payload;
    },
    catHandlePageClick(state, { payload }) {
      state.catPageNumber = payload;
    },
    acceptHandle(state, { payload }) {
      const fetchData = async () => {
        if (payload.type === "pending") {
          var responseaccept = await fetchApiData(
            `admin/applications/accept-manage/${payload.id}`
          );
        } else if (payload.type === "rejected") {
          responseaccept = await fetchApiData(
            `admin/applications/accept-manage/${payload.id}`
          );
        }
        if (responseaccept.status === true) {
          notify("application accepted !", "success");
        } else {
          notify("something is wrong !", "error");
        }
      };
      fetchData();
    },
    rejectHandle(state, { payload }) {
      const fetchData = async () => {
        if (payload.type === "rejected") {
          const responsed = await fetchApiData(
            `admin/applications/reject-manage/${payload.id}`
          );
          if (responsed.status === true) {
            notify("application rejected !", "success");
          } else {
            notify("something is wrong !", "error");
          }
        } else {
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
                const response = await deleteApiData(
                  `applications/${payload.id}`
                );
                if (response.status === true) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: response.message,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                } else {
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
        }
      };
      fetchData();
    },
  },
});

export const {
  setapplications,
  catHandlePageClick,
  handlePageClick,
  setCategoriesApplications,
  acceptHandle,
  rejectHandle,
} = ManageApplicationSlice.actions;

export default ManageApplicationSlice.reducer;
