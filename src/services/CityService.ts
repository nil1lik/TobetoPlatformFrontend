import { GetAllDistrictByIdCity } from '../models/responses/city/getAllDistrictByIdCityResponse';
import { GetDistrict } from '../models/responses/district/getDistrictResponse';
//import axios from "axios"
import { BaseService } from "./baseService";
import { GetByIdCityResponse } from "../models/responses/city/getByIdCityResponse";
import { GetCity } from "../models/responses/city/getCityResponse";
import { AddCityResponse } from "../models/responses/city/addCityResponse";
import { UpdateCityResponse } from "../models/responses/city/updateCityResponse";
import { AddCityRequest } from "../models/requests/city/addCityRequest";
import { UpdateCityRequest } from "../models/requests/city/updateCityRequest";
import { BASE_API_URL } from "../environment/environment";

class CityService extends BaseService<
  GetCity,
  GetByIdCityResponse,
  AddCityResponse,
  UpdateCityResponse,
  AddCityRequest,
  UpdateCityRequest
>{

  constructor(){
    super();
    this.apiUrl = BASE_API_URL + "Cities";
    // this.dtoUrl= BASE_API_URL + "District"
  }

  getByFilter(pageIndex: number= 0, pageSize: number=81){
    return this.getAll(pageIndex,pageSize);
  }
  
  
}

export default new CityService();


// export default class CityService{
//   getCity(){
//     return axios.get("http://localhost:5278/api/Cities?PageIndex=0&PageSize=81")
//   }
//   getCityId(CityId:string){
//     return axios.get(`http://localhost:5278/api/Cities/${CityId}`)
//   }
//   getDistrict(CityId:string){
//     return axios.get(`http://localhost:5278/api/Cities/getDistrict/${CityId}`)
//   }
// }