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
      // Attach token to Authorization header in the format 'Bearer <token>'
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers = {
        "Content-Type": "application/json", // Ensuring JSON content type
        Authorization: `Bearer ${token}`,
        Origin: "https://api.allrooftakeoffs.com.au", // Dynamically set the origin from environment variable
        // Origin: "http://localhost:5000", // Dynamically set the origin from environment variable
        "Access-Control-Allow-Credentials": "true", // Allow credentials to be included in the request
        credentials: "include",
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
