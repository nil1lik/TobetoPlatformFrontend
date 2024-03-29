import { GetAllDistrictByIdCity} from '../models/responses/city/getAllDistrictByIdCityResponse';
import { BaseService } from "../core/services/baseService";
import { GetByIdCityResponse } from "../models/responses/city/getByIdCityResponse";
import { GetCity } from "../models/responses/city/getCityResponse";
import { AddCityResponse } from "../models/responses/city/addCityResponse";
import { UpdateCityResponse } from "../models/responses/city/updateCityResponse";
import { AddCityRequest } from "../models/requests/city/addCityRequest";
import { UpdateCityRequest } from "../models/requests/city/updateCityRequest";
import { BASE_API_URL } from "../core/environment/environment";
import axios, { AxiosResponse } from 'axios';

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
    this.dtoUrl= this.apiUrl + "/getDistrict";
  }
  
  getByFilter(pageIndex: number= 0, pageSize: number=81){
    return this.getAll(pageIndex,pageSize);
  }
  
  getDistrictsBySelectedCityId(id: any): Promise<AxiosResponse<GetAllDistrictByIdCity, any>> {
		return axios.get<GetAllDistrictByIdCity>(this.dtoUrl + "/" + id);
	}
}

export default new CityService();

