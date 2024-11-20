import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://api.allrooftakeoffs.com.au",
  baseURL: "http://145.223.23.243:5000",
  withCredentials: true,
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
