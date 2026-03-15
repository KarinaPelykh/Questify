import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://questify-backend-05gl.onrender.com/api",
});

export const setToken = (token = "") => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer${token}`;
};

export const removeToken = () => {
  axiosInstance.defaults.headers.common.Authorization = "";
};
