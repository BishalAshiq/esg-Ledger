import axios from "axios";

let token = "";

if (typeof window !== "undefined") {
    token = localStorage.getItem("refreshToken");
}

const axiosInstance = axios.create({
    baseURL: "http://192.168.0.107:8000/api/",
    // baseURL: 'http://10.81.11.62:8000/api/',

    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
});

export default axiosInstance;
