import axios, { AxiosResponse } from "axios";
import { BaseService } from "./baseService";
import { GetByIdLanguage } from "../models/responses/language/getByIdLanguage";
import { AddLanguageRequest } from "../models/requests/language/addLanguageRequest";
import { AddLanguageResponse } from "../models/responses/language/addLanguageResponse";
import { UpdateLanguageResponse } from "../models/responses/language/updateLanguageResponse";
import { GetLanguage } from "../models/responses/language/getLanguage";
import { UpdateLanguageRequest } from "../models/requests/language/updateLanguageRequest";
import { BASE_API_URL } from "../environment/environment";
import { GetLanguageLevel } from "../models/responses/language/getLanguageLevel";

// export default class LanguageService{
//     getLanguage(){
//       return axios.get("http://localhost:5278/api/Languages?PageIndex=0&PageSize=26")
//     }
//     getLanguageLevel(){
//         return axios.get("http://localhost:5278/api/LanguageLevels?PageIndex=0&PageSize=5")
//     }
//     updateLanguage(language:Language){
//         return axios.put("http://localhost:5278/api/Languages",language)
//     }
// }

class LanguageService extends BaseService<
  GetLanguage,
  GetByIdLanguage,
  AddLanguageRequest,
  AddLanguageResponse,
  UpdateLanguageRequest,
  UpdateLanguageResponse
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "Languages";
  }

  getByFilter(pageIndex: number = 0, pageSize: number = 25) {
    return this.getAll(pageIndex, pageSize);
  }

  getLanguageLevel(
    pageIndex: number = 0,
    pageSize: number = 5
  ): Promise<AxiosResponse<GetLanguageLevel, any>> {
    return axios.get<GetLanguageLevel>(
        BASE_API_URL + "LanguageLevels" +`?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }
} 
 
export default new LanguageService();
