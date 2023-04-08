import axios from "axios";

export const BASE_URL =
  "https://singsong-8690d.uc.r.appspot.com";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*"
  },
});
