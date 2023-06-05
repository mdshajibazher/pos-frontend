import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://pos-frontend.test",
});

export default axiosInstance;