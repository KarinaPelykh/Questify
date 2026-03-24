import axios from "axios";

import { getAccessToken, setStoredAccessToken } from "./authStore";

export const axiosInstance = axios.create({
  baseURL: "https://questify-backend-05gl.onrender.com/api/",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status == 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axiosInstance.post(
          "auth/refresh",
          {},
          { withCredentials: true },
        );
        setStoredAccessToken(data.accessToken);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return axiosInstance(originalRequest);
      } catch (error) {
        setStoredAccessToken(null);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
