import { BASE_API_URL } from "../environment/environment";
import { AddEducationRequest } from "../models/requests/education/addEducationRequest";
import { UpdateEducationRequest } from "../models/requests/education/updateEducationRequest";
import { AddEducationResponse } from "../models/responses/education/addEducationResponse";
import { GetByIdEducation } from "../models/responses/education/getByIdEducation";
import { GetEducation } from "../models/responses/education/getEducation";
import { UpdateEducationResponse } from "../models/responses/education/updateEducationResponse";
import { BaseService } from "./baseService";

class EducationService extends BaseService<
GetEducation,
GetByIdEducation,
AddEducationResponse,
AddEducationRequest,
UpdateEducationRequest,
UpdateEducationResponse 
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "EducationPaths"; 
  }
  getByFilter(pageIndex:number=0, pageSize: number=10){
    return this.getAll(pageIndex, pageSize);
  }
} 

export default new EducationService(); 