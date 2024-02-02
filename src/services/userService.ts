import axios from "axios"
import { userRegisterRequest } from "../models/requests/user/userRegisterRequest";
import { BASE_API_URL } from "../core/environment/environment";
import { userLoginRequest } from "../models/requests/user/userLoginRequest";

export default class UserService{
  addUser(userData: userRegisterRequest){
    return axios.post(BASE_API_URL +"Auth/Register", userData);
  }

  loginUser(userData: userLoginRequest){
    return axios.post(BASE_API_URL +"Auth/Login", userData);
  }
}