import axios from "axios"

export default class LanguageService{
    getLanguage(){
      return axios.get("http://localhost:5278/api/Languages?PageIndex=0&PageSize=26")
    }
    getLanguageLevel(){
        return axios.get("http://localhost:5278/api/LanguageLevels?PageIndex=0&PageSize=5")
      }
}