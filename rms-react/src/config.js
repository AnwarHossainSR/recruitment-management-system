import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default axios;
