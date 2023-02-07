import axios from "axios";

export const BASE_URL =
  "localhost://8001";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*"
  },
});
