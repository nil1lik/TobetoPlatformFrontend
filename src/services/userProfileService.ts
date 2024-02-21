import { GetUser } from "../models/responses/user/getUser";
import { UpdateUserRequest } from "../models/requests/user/updateUserRequest";
import { AddUserResponse } from "../models/responses/user/addUserResponse";
import { GetByIdUser } from "../models/responses/user/getByIdUser";

import { BaseService } from "../core/services/baseService";
import { AddUserRequest } from "../models/requests/user/addUserRequest";
import { UpdateUserResponse } from "../models/responses/user/updateUserResponse";
import { BASE_API_URL } from "../core/environment/environment";
import axios, { AxiosResponse } from "axios";

class UserProfileService extends BaseService<
  GetUser,
  GetByIdUser,
  AddUserRequest,
  AddUserResponse,
  UpdateUserRequest,
  UpdateUserResponse
> {
  public User : string
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "UserProfiles";
    this.User = BASE_API_URL + "Users";
  }
  getByUserId(id: number): Promise<AxiosResponse<GetByIdUser, any>> {
    return axios.get<GetByIdUser>(this.User + "/" + id);
  }
}

export default new UserProfileService();
