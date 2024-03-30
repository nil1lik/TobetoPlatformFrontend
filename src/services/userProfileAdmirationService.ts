import { BASE_API_URL } from "../core/environment/environment";
import { BaseService } from "../core/services/baseService";
import { AddProfileAdmirationRequest } from "../models/requests/profileAdmiration/addProfileAdmirationRequest";
import { UpdateProfileAdmirationRequest } from "../models/requests/profileAdmiration/updateProfileAdmirationRequest";
import { AddProfileAdmiration } from "../models/responses/profileAdmiration/addProfileAdmiration";
import { GetByIdProfileAdmirationResponse } from "../models/responses/profileAdmiration/getByIdProfileAdmirationResponse";
import { GetProfileAdmirationResponse } from "../models/responses/profileAdmiration/getProfileAdmirationResponse";
import { UpdateProfileAdmirationResponse } from "../models/responses/profileAdmiration/updateProfileAdmirationResponse";

class UserProfileAdmirationService extends BaseService<
  GetProfileAdmirationResponse,
  GetByIdProfileAdmirationResponse,
  AddProfileAdmiration,
  AddProfileAdmirationRequest,
  UpdateProfileAdmirationRequest,
  UpdateProfileAdmirationResponse
> {
    constructor(){
        super();
        this.apiUrl = BASE_API_URL + "ProfileAdmirations";
    }
}

export default new UserProfileAdmirationService();