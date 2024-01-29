import axios from "axios"
import { userRegisterRequest } from "../models/requests/user/userRegisterRequest";

export default class UserRegisterService{
  addUser(userData: userRegisterRequest){
    return axios.post("http://localhost:5278/api/Auth/Register", userData);
  }
}