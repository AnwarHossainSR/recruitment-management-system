import axios from "axios";

//GetData
export const fetchApiData = async (url) => {
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch((response) => response.data);
};

//store data
export const storeApiData = async (url, data) => {
  return await axios
    .post(url, data)
    .then((response) => response.data)
    .catch((response) => response.response.data);
};

//update data
export const updateApiData = async (url, data) => {
  return await axios
    .put(url, data)
    .then((response) => response.data)
    .catch((response) => response.response.data);
};

//delete data
export const deleteApiData = async (url) => {
  return await axios
    .delete(url)
    .then((response) => response.data)
    .catch((response) => response.response.data);
};
