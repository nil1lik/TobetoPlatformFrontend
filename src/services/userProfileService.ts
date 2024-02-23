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
import { GetGraduationByUserId, GetGraduationByUserIdList } from "../models/responses/userProfile/getGraduationByUserId";
import { GetExperienceByUserIdList } from "../models/responses/userProfile/getExperienceByUserId";

class UserProfileService extends BaseService<
  GetUserProfile,
  GetByIdUserProfile,
  AddUserProfileRequest,
  AddUserProfileResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse
> {
  public User : string;
  public Graduation: string;
  public Experience: string;
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "UserProfiles";
    this.User = BASE_API_URL + "Users";
    this.dtoUrl = this.apiUrl + "/getByUserId"
    this.Graduation = this.apiUrl + "/getAllGraduation" 
    this.Experience = this.apiUrl + "/getAllExperience"
  }
  getByUserId(id: number): Promise<AxiosResponse<GetByIdUser, any>> {
    return axios.get<GetByIdUser>(this.User + "/" + id);
  }

  getUserProfileByUserId(id: number): Promise<AxiosResponse<GetUserProfileByUserId, any>> {
		return axios.get<GetUserProfileByUserId>(this.dtoUrl + "/" + id);
	}

  getGraduationByUserId(id: number): Promise<AxiosResponse<GetGraduationByUserIdList, any>> {
		return axios.get<GetGraduationByUserIdList>(this.Graduation + "/" + id);
	}

  getExperienceByUserId(id: number): Promise<AxiosResponse<GetExperienceByUserIdList, any>> {
		return axios.get<GetExperienceByUserIdList>(this.Experience + "/" + id);
	}
}

export default new UserProfileService();
