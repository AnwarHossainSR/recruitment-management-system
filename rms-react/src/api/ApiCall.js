import axios from "axios";

//getAllData
export const fetchAll = async (url) => {
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch((response) => response.response.data);
};

//Get Data
export const fetchApiData = async (url) => {
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch((response) => response.response.data);
};

//get sigle data
export const getData = async (url) => {
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch((response) => response.response.data);
};

//store data
export const storeApiData = async (url, data) => {
  return await axios
    .post(url, data)
    .then((response) => response.data)
    .catch((response) => response.response.data);
};

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
