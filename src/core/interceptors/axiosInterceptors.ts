import toastr from "toastr";
import axios from 'axios';
import { BASE_API_URL } from '../environment/environment';
import { parseJwt } from '../../utilities/Constants/parseJwt';

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
        if (accessToken) {
            const token = accessToken.token;
            localStorage.setItem("token", token);
            const decodedToken = parseJwt(token);
            const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
            console.log(userId);
            response.headers['userId'] = userId;
            console.log("Kullanıcı ID:", userId);
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

