import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://api.allrooftakeoffs.com.au", // Set your base URL
  // baseURL: "http://localhost:5000", // Use for local development
  withCredentials: true, // Automatically include cookies for cross-origin requests
});

axiosPublic.interceptors.request.use(
  (config) => {
    // Modify headers as needed
    config.headers = {
      ...config.headers, // Preserve existing headers
      "Content-Type": "application/json", // Ensure JSON content type
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
