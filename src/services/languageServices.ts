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
import axiosInstance from "../core/interceptors/axiosInterceptors";


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

  getByFilter(pageIndex: number = 0, pageSize: number = 25) {
    return this.getAll(pageIndex, pageSize);
  }

  getLanguageLevel(
    pageIndex: number = 0,
    pageSize: number = 5
  ): Promise<AxiosResponse<GetLanguageLevel, any>> {
    return axiosInstance.get<GetLanguageLevel>(
        BASE_API_URL + "LanguageLevels" +`?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }
} 
 
export default new LanguageService();
