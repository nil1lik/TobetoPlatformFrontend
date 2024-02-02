import axios from "axios";
import { BASE_API_URL } from "../environment/environment";
import tokenService from "../services/tokenService";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
    const authContext = useContext(AuthContext);
    const token = tokenService.getToken();
    const refreshToken = tokenService.getRefreshToken();

    console.log("Token:", token);
    console.log("Refresh Token:", refreshToken);

    if (token) {
        console.log("Authorization Başlığı Token ile Ayarlanıyor");
        config.headers.Authorization = `Bearer ${token}`;
    }

    if (!token && refreshToken) {
        console.log("Token yenileme işlemi başlatılıyor...");
        try {
            const response = await axios.get(`${BASE_API_URL}/Auth/RefreshToken`, {
                params: {
                    refreshToken: refreshToken,
                },
            });
        
            const newToken = response.data.token;
            tokenService.setTokens(newToken, refreshToken);
        
            console.log("Yenilenmiş Token:", newToken);
        
            if (authContext.auth && newToken) {
                console.log("Authorization Başlığı Yeni Token ile Ayarlanıyor");
                config.headers.Authorization = `Bearer ${newToken}`;
            }
        } catch (error) {
            console.error("Token yenileme hatası:", error);
            tokenService.clearTokens();
        }
    }

    return config;
});

export default axiosInstance;
