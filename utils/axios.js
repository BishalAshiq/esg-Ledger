import axios from "axios";

let token = "";

if (typeof window !== "undefined") {
    token = localStorage.getItem("refreshToken");
}

const axiosInstance =  axios.create({
    baseURL: "http://192.168.0.107:8000/api/",
    // baseURL: 'http://157.245.56.52:9000/',

    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
    },
});

export default axiosInstance;
