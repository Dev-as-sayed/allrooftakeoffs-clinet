import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://145.223.23.243:5000",
  // baseURL: "https://allrooftakeoffs-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
