import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://api.allrooftakeoffs.com.au",
  baseURL: "https://145.223.23.243:5000",
});

// Request interceptor to add the token to headers
axiosSecure.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Retrieve the token from localStorage

    if (token) {
      // Attach token to Authorization header in the format 'Bearer <token>'
      config.headers.Authorization = `Bearer ${token}`;
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
