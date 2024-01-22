import axios from "axios"

export default class UserService{
  addUser(){
    return axios.post("http://localhost:5278/api/Auth/Register")
  }
}