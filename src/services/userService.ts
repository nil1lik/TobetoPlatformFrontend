import axios from "axios"
import { userData } from "../models/requests/user/userData";

export default class UserService{
  addUser(userData: userData){
    return axios.post("http://localhost:5278/api/Auth/Register", userData);
  }
}