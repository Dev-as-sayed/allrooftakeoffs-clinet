// import axios from "axios";

// const axiosPublic = axios.create({
//   baseURL: "https://api.allrooftakeoffs.com.au",
//   withCredentials: true,
// });
// const useAxiosPublic = () => {
//   return axiosPublic;
// };

// export default useAxiosPublic;

import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://api.allrooftakeoffs.com.au",
  // baseURL: "http://localhost:5000",
  withCredentials: true, // Automatically send cookies with cross-origin requests
});

axiosPublic.interceptors.request.use(
  (config) => {
    // Add headers dynamically here
    config.headers = {
      "Content-Type": "application/json", // Ensuring JSON content type
      Origin: "https://api.allrooftakeoffs.com.au", // Dynamically set the origin from environment variable
      // Origin: "http://localhost:5000", // Dynamically set the origin from environment variable
      "Access-Control-Allow-Credentials": "true", // Allow credentials to be included in the request
      credentials: "include",
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
