import axios from "axios"
import { userRegisterRequest } from "../models/requests/user/userRegisterRequest";
import axiosInstance from "../core/interceptors/axiosInterceptors";

export default class UserRegisterService{
  addUser(userData: userRegisterRequest){
    return axiosInstance.post("http://localhost:5278/api/Auth/Register", userData);
  }
}