import { createSlice } from "@reduxjs/toolkit";
import { deleteApiData, fetchApiData } from "../api/ApiCall";
import { notify } from "../services/Notification";
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
          var responseaccept = await fetchApiData(
            `admin/applications/accept-manage/${payload.id}`
          );
        }
        if (responseaccept.status === true) {
          console.log(responseaccept);
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
          const response = await fetchApiData(
            `admin/applications/reject-manage/${payload.id}`
          );
          if (response.status === true) {
            notify("application rejected !", "success");
          } else {
            notify("something is wrong !", "error");
          }
        } else {
          const response = await deleteApiData(`applications/${payload.id}`);
          if (response.status === true) {
            notify("application deleted !", "success");
          } else {
            notify(response.message, "error");
          }
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
