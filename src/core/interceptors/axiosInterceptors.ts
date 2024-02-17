import { GetUser } from './../../models/responses/user/getUser';
import toastr from "toastr";
    import axios from 'axios';
import { BASE_API_URL } from '../environment/environment';
// import axios from "axios";
// import { BASE_API_URL } from "../environment/environment";
// import tokenService from "../services/tokenService";
// import { AuthContext } from "../../contexts/AuthContext";
// import { useContext } from "react";

// const axiosInstance = axios.create({
//     baseURL: BASE_API_URL,
// });

// axiosInstance.interceptors.request.use(async (config) => {
//     const authContext = useContext(AuthContext);
//     const token = tokenService.getToken();
//     const refreshToken = tokenService.getRefreshToken();

//     console.log("Token:", token);
//     console.log("Refresh Token:", refreshToken);

//     if (token) {
//         console.log("Authorization Başlığı Token ile Ayarlanıyor");
//         config.headers.Authorization = `Bearer ${token}`;
//     }

//     if (!token && refreshToken) {
//         console.log("Token yenileme işlemi başlatılıyor...");
//         try {
//             const response = await axios.get(`${BASE_API_URL}/Auth/RefreshToken`, {
//                 params: {
//                     refreshToken: refreshToken,
//                 },
//             });

//             const newToken = response.data.token;
//             tokenService.setTokens(newToken, refreshToken);

//             console.log("Yenilenmiş Token:", newToken);

//             if (authContext.auth && newToken) {
//                 console.log("Authorization Başlığı Yeni Token ile Ayarlanıyor");
//                 config.headers.Authorization = `Bearer ${newToken}`;
//             }
//         } catch (error) {
//             console.error("Token yenileme hatası:", error);
//             tokenService.clearTokens();
//         }
//     }

//     return config;
// });

// export default axiosInstance;

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

function parseJwt(token:any) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

export default axiosInstance;

