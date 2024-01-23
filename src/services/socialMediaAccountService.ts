import axios from "axios"

export default class SocialMediaAccountService{
  getSocialMediaCategories(){
    return axios.get("http://localhost:5278/api/SocialMediaCategories?PageIndex=0&PageSize=10")
  }
}