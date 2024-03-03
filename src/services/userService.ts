import axios from "axios"
import { userRegisterRequest } from "../models/requests/user/userRegisterRequest";
import { BASE_API_URL } from "../core/environment/environment";
import { userLoginRequest } from "../models/requests/user/userLoginRequest";
import axiosInstance from "../core/interceptors/axiosInterceptors";

class UserService {
  addUser(userData: userRegisterRequest) {
    return axiosInstance.post(BASE_API_URL + "Auth/Register", userData);
  }

  loginUser(userData: userLoginRequest) {
    return axiosInstance.post(BASE_API_URL + "Auth/Login", userData);
  }

  refreshToken(){
    return axiosInstance.get(BASE_API_URL + "Auth/RefreshToken");
  }
}

export default new UserService();