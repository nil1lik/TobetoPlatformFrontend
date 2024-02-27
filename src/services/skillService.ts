// import axios from "axios"

import { GetSkill } from "../models/responses/skill/getSkillResponse";
import { BaseService } from "../core/services/baseService";
import {BASE_API_URL} from "../core/environment/environment";
import { AddSkillRequest } from "../models/requests/skill/addSkillRequest";
import { UpdateSkillRequest } from "../models/requests/skill/updateSkillRequest";
import { GetByIdSkillResponse } from "../models/responses/skill/getByIdSkillResponse";
import { AddSkillResponse } from "../models/responses/skill/addSkillResponse";
import { UpdateSkillResponse } from "../models/responses/skill/updateSkillResponse";
import axios, { AxiosResponse } from "axios";
import { AddProfileSkillRequest } from "../models/requests/skill/addProfileSkillRequest";
import { AddProfileSkillResponse } from "../models/responses/skill/addProfileSkillResponse";
import errorInstance from "../core/interceptors/errorInterceptor";

class SkillService extends BaseService<
  GetSkill,
  GetByIdSkillResponse,
  AddSkillRequest,
  UpdateSkillRequest,
  AddSkillResponse,
  UpdateSkillResponse
>{
  public profileSkill : string
  constructor(){
    super();
    this.apiUrl = BASE_API_URL + "Skills";
    this.profileSkill = BASE_API_URL + "ProfileSkills"
  }
  
  getByFilter(pageIndex: number = 0, pageSize: number = 25) {
    return this.getAll(pageIndex, pageSize); 
  }

  addProfilSkill(request: AddProfileSkillRequest): Promise<AxiosResponse<AddProfileSkillResponse, any>> {
		return errorInstance.post<AddProfileSkillResponse>(this.profileSkill, request);
	}

  deleteSkill(id: number) {
		return axios.delete(this.profileSkill + "/" + id );
	}
}

export default new SkillService();

