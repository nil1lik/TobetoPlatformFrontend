import axios from "axios"

export default class CityService{
  getCity(){
    return axios.get("http://localhost:5278/api/Cities?PageIndex=0&PageSize=81")
  }
  getDistrict(CityId:string){
    return axios.get(`http://localhost:5278/api/Cities/getDistrict/${CityId}`)
  }
}