import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.headers.common = { Authorization: `bearer ${token}` };
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default axios;
