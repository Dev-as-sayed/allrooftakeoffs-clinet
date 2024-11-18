import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://145.223.23.243:5000",
  // baseURL: "https://allrooftakeoffs-server.vercel.app", // Replace with younpm r actual backend URL
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
