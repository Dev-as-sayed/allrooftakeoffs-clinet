// import axios from "axios";

// const axiosPublic = axios.create({
//   baseURL: "https://api.allrooftakeoffs.com.au",
//   // baseURL: "http://localhost:5000",
//   withCredentials: true, // Automatically send cookies with cross-origin requests
// });

// axiosPublic.interceptors.request.use(
//   (config) => {
//     // Add headers dynamically here
//     config.headers = {
//       "Content-Type": "application/json", // Ensuring JSON content type
//       Origin: "https://api.allrooftakeoffs.com.au", // Dynamically set the origin from environment variable
//       // Origin: "http://localhost:5000", // Dynamically set the origin from environment variable
//       "Access-Control-Allow-Credentials": "true", // Allow credentials to be included in the request
//       credentials: "include",
//     };
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// const useAxiosPublic = () => {
//   return axiosPublic;
// };

// export default useAxiosPublic;

import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://api.allrooftakeoffs.com.au", // Set your base URL
  baseURL: "http://localhost:5000", // Use for local development
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
