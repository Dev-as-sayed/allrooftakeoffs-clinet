import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://api.allrooftakeoffs.com.au",
  // baseURL: "http://localhost:5000",
  withCredentials: true,
});

// Request interceptor to add the token to headers
axiosSecure.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Retrieve the token from localStorage

    if (token) {
      config.headers = {
        "Content-Type": "application/json", // Ensuring JSON content type
        Authorization: `Bearer ${token}`, // Attach token in Authorization header
        // No need for "Origin" header here
        "Access-Control-Allow-Credentials": "true", // Allow credentials to be included
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
