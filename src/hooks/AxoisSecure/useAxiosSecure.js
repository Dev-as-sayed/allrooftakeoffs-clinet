import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://api.allrooftakeoffs.com.au",
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

// Request interceptor to dynamically add headers
axiosSecure.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Retrieve the token from localStorage

    if (token) {
      // Add Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Allow credentials
    config.headers["Access-Control-Allow-Credentials"] = "true";

    // Set default Content-Type to JSON if not explicitly set
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }

    // Set default Accept header
    if (!config.headers["Accept"]) {
      config.headers["Accept"] = "application/json, text/plain, */*";
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
