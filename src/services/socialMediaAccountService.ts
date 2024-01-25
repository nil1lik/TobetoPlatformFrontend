import axios, { AxiosResponse } from "axios"
import { GetSocialMediaAccount } from "../models/responses/socialMediaAccount/getSocialMediaAccount";
import { GetByIdSocialMediaAccount } from "../models/responses/socialMediaAccount/getByIdSocialMediaAccount";
import { AddSocialMediaAccountRequest } from "../models/requests/socialMediaAccount/addSocialMediaAccountRequest";
import { UpdateSocialMediaAccountResponse } from "../models/responses/socialMediaAccount/updateSocialMediaAccountResponse";
import { AddSocialMediaAccountResponse } from "../models/responses/socialMediaAccount/addSocialMediaAccountResponse";
import { UpdateSocialMediaAccountRequest } from "../models/requests/socialMediaAccount/updateSocialMediaAccountRequest";
import { BaseService } from "./baseService";
import { BASE_API_URL } from "../environment/environment";
import { GetAllSocialMediaCategory } from "../models/responses/socialMediaAccount/getAllSocialMediaCategory";

class SocialMediaAccountService extends BaseService<
  GetSocialMediaAccount,
  GetByIdSocialMediaAccount,
  AddSocialMediaAccountRequest,
  AddSocialMediaAccountResponse,
  UpdateSocialMediaAccountResponse,
  UpdateSocialMediaAccountRequest
>
{
  constructor(){
    super();
    this.apiUrl = BASE_API_URL + "SocialMediaCategories/"
  }
  getByFilter(pageIndex: number=0, pageSize: number=1) {
    return this.getAll(pageIndex, pageSize)
  }

  getAllCategory(pageIndex: number=0, pageSize: number=6): Promise<AxiosResponse<GetAllSocialMediaCategory, any>> {
		return axios.get<GetAllSocialMediaCategory>(this.apiUrl+`?PageIndex=${pageIndex}&PageSize=${pageSize}`);
	}
}

export default new SocialMediaAccountService();