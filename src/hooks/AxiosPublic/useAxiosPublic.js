import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://api.allrooftakeoffs.com.au",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
