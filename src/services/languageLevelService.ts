import axios from "axios"

export default class LanguageLevelService{
  getLanguageLevel(){
    return axios.get("http://localhost:5278/api/LanguageLevels?PageIndex=0&PageSize=4")
  }
}