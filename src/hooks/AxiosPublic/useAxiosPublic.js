import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://api.allrooftakeoffs.com.au",
  baseURL: "https://145.223.23.243:5000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
