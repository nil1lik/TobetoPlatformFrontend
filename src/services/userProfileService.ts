import { GetByIdUser } from "../models/responses/user/getByIdUser";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../core/environment/environment";
import axios, { AxiosResponse } from "axios";
import { GetByIdUserProfile } from "../models/responses/userProfile/getByIdUserProfile";
import { GetUserProfile } from "../models/responses/userProfile/getUserProfile";
import { AddUserProfileRequest } from "../models/requests/userProfile/addUserProfileRequest";
import { AddUserProfileResponse } from "../models/responses/userProfile/addUserProfileResponse";
import { UpdateUserProfileRequest } from "../models/requests/userProfile/updateUserProfileRequest";
import { UpdateUserProfileResponse } from "../models/responses/userProfile/updateUserProfileResponse";
import { GetUserProfileByUserId } from "../models/responses/userProfile/getUserProfileByUserId";

class UserProfileService extends BaseService<
  GetUserProfile,
  GetByIdUserProfile,
  AddUserProfileRequest,
  AddUserProfileResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse
> {
  public User : string
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "UserProfiles";
    this.User = BASE_API_URL + "Users";
    this.dtoUrl = this.apiUrl + "/getByUserId/"
  }
  getByUserId(id: number): Promise<AxiosResponse<GetByIdUser, any>> {
    return axios.get<GetByIdUser>(this.User + "/" + id);
  }

  getUserProfileByUserId(id: number): Promise<AxiosResponse<GetUserProfileByUserId, any>> {
		return axios.get<GetUserProfileByUserId>(this.dtoUrl + "/" + id);
	}
}

export default new UserProfileService();
