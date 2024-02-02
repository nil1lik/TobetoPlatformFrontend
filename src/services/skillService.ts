// import axios from "axios"

import { GetSkill } from "../models/responses/skill/getSkillResponse";
import { BaseService } from "../core/services/baseService";
import {BASE_API_URL} from "../core/environment/environment";
import { AddSkillRequest } from "../models/requests/skill/addSkillRequest";
import { UpdateSkillRequest } from "../models/requests/skill/updateSkillRequest";
import { GetByIdSkillResponse } from "../models/responses/skill/getByIdSkillResponse";
import { AddSkillResponse } from "../models/responses/skill/addSkillResponse";
import { UpdateSkillResponse } from "../models/responses/skill/updateSkillResponse";

class SkillService extends BaseService<
  GetSkill,
  GetByIdSkillResponse,
  AddSkillRequest,
  UpdateSkillRequest,
  AddSkillResponse,
  UpdateSkillResponse
>{
  constructor(){
    super();
    this.apiUrl = BASE_API_URL + "Skills";
  }
  
  getByFilter(pageIndex: number = 0, pageSize: number = 25) {
    return this.getAll(pageIndex, pageSize); 
  }
}

export default new SkillService();

