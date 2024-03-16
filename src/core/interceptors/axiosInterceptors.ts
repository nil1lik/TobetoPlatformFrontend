import toastr from "toastr";
import axios from 'axios';
import { BASE_API_URL } from '../environment/environment';

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
})

axiosInstance.interceptors.request.use(
    request => {
        const token = localStorage.getItem("token");
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    error => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    response => {
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.RefreshToken;
        const userId = response.data.userId;
        console.log(response)
        localStorage.setItem("refreshToken", refreshToken);
        if (accessToken) {
            const token = accessToken.token;
            setTimeout(accessToken, 10 * 60 * 1000);
            response.headers["userId"] = userId;
            localStorage.setItem("token", token);
        }
        toastr.success("Giriş Başarılı");
        return response;
    },
    error => {
        console.error(error);
        if (error.response && error.response.data && error.response.data.detail) {
            toastr.error(error.response.data.detail);
        } else {
            toastr.error("Bir hata oluştu");
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;
