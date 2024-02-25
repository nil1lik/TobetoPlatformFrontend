import axios, { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { GetByIdLanguage } from "../models/responses/language/getByIdLanguage";
import { AddLanguageRequest } from "../models/requests/language/addLanguageRequest";
import { AddLanguageResponse } from "../models/responses/language/addLanguageResponse";
import { UpdateLanguageResponse } from "../models/responses/language/updateLanguageResponse";
import { GetLanguage } from "../models/responses/language/getLanguage";
import { UpdateLanguageRequest } from "../models/requests/language/updateLanguageRequest";
import { BASE_API_URL } from "../core/environment/environment";
import { GetLanguageLevel } from "../models/responses/language/getLanguageLevel";
import { AddProfileLanguageRequest } from "../models/requests/language/addProfileLanguageRequest";
import { AddProfileLanguageResponse } from "../models/responses/language/addProfileLanguageResponse";

class LanguageService extends BaseService<
  GetLanguage,
  GetByIdLanguage,
  AddLanguageRequest,
  AddLanguageResponse,
  UpdateLanguageRequest,
  UpdateLanguageResponse
> {
  public profileLanguage :string;
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "Languages";
    this.profileLanguage = BASE_API_URL + "ProfileLanguages";
  }

  getLanguageLevel(
    pageIndex: number = 0,
    pageSize: number = 5
  ): Promise<AxiosResponse<GetLanguageLevel, any>> {
    return axios.get<GetLanguageLevel>(
        BASE_API_URL + "LanguageLevels" +`?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }

  addProfilLanguage(request: AddProfileLanguageRequest): Promise<AxiosResponse<AddProfileLanguageResponse, any>> {
		return axios.post<AddProfileLanguageResponse>(this.profileLanguage, request);
	}

  deletedLanguage(userId:number, languageId: number, levelId:number){
    return axios.delete(this.profileLanguage + "/" + userId +"/" + languageId +"/" + levelId );
  }
} 
 
export default new LanguageService();
