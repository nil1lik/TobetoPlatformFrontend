import axios, { AxiosResponse } from "axios"
import { GetSocialMediaAccount } from "../models/responses/socialMediaAccount/getSocialMediaAccount";
import { GetByIdSocialMediaAccount } from "../models/responses/socialMediaAccount/getByIdSocialMediaAccount";
import { AddSocialMediaAccountRequest } from "../models/requests/socialMediaAccount/addSocialMediaAccountRequest";
import { UpdateSocialMediaAccountResponse } from "../models/responses/socialMediaAccount/updateSocialMediaAccountResponse";
import { AddSocialMediaAccountResponse } from "../models/responses/socialMediaAccount/addSocialMediaAccountResponse";
import { UpdateSocialMediaAccountRequest } from "../models/requests/socialMediaAccount/updateSocialMediaAccountRequest";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../core/environment/environment";
import { GetAllSocialMediaCategory } from "../models/responses/socialMediaAccount/getAllSocialMediaCategory";
import errorInstance from "../core/interceptors/errorInterceptor";

class SocialMediaAccountService extends BaseService<
  GetSocialMediaAccount,
  GetByIdSocialMediaAccount,
  AddSocialMediaAccountRequest,
  AddSocialMediaAccountResponse,
  UpdateSocialMediaAccountResponse,
  UpdateSocialMediaAccountRequest
>
{
  public  SocialMediaCategoryUrl : string
  constructor(){
    super();
    this.apiUrl = BASE_API_URL + "SocialMediaAccounts"
    this.SocialMediaCategoryUrl = BASE_API_URL+ "SocialMediaCategories"
  }
  getByFilter(pageIndex: number=0, pageSize: number=1) {
    return this.getAll(pageIndex, pageSize)
  }

  getAllCategory(pageIndex: number=0, pageSize: number=6): Promise<AxiosResponse<GetAllSocialMediaCategory, any>> {
		return axios.get<GetAllSocialMediaCategory>(this.SocialMediaCategoryUrl+`?PageIndex=${pageIndex}&PageSize=${pageSize}`);
	}

  getSocialMediaAccountById(id: number): Promise<AxiosResponse<UpdateSocialMediaAccountRequest, any>> {
		return axios.get<UpdateSocialMediaAccountRequest>(this.apiUrl + "/" + id);
	}

  addSocialMediaAccount(request: AddSocialMediaAccountRequest): Promise<AxiosResponse<AddSocialMediaAccountResponse, any>> {
		return errorInstance.post<AddSocialMediaAccountResponse>(this.apiUrl, request);
	}
}

export default new SocialMediaAccountService();