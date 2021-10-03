import { createSlice } from "@reduxjs/toolkit";
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
  },
});

export const {
  setapplications,
  catHandlePageClick,
  handlePageClick,
  setCategoriesApplications,
} = ManageApplicationSlice.actions;

export default ManageApplicationSlice.reducer;
