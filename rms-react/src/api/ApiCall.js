import axios from "../config";

//getAllData
export const fetchAll = async (url) => {
  try {
    return await (
      await axios.get(url)
    ).data;
  } catch (error) {
    return error;
  }
};

//get sigle data
export const getData = async (url) => {
  try {
    return await (
      await axios.get(url)
    ).data;
  } catch (error) {
    return error;
  }
};

// //store data
// export const storeApiData = async (url, data) => {
//   try {
//     return await (
//       await axios.post(url, data)
//     ).data;
//   } catch (error) {
//     return error;
//   }
// };

// //update data
// export const updateData = async (url, data) => {
//   try {
//     return await axios.put(url, data);
//   } catch (error) {
//     return error;
//   }
// };

// //delete data
// export const deleteData = async (url) => {
//   try {
//     return await (
//       await axios.delete(url)
//     ).data;
//   } catch (error) {
//     return error;
//   }
// };
