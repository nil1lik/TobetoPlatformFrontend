import { AxiosResponse } from "axios";
import { BASE_API_URL } from "../core/environment/environment";
import { BaseService } from "../core/services/baseService";
import { AddGraduationRequest } from "../models/requests/graduation/addGraduationRequest";
import { UpdateGraduationRequest } from "../models/requests/graduation/updateGraduationRequest";
import { AddGraduationResponse } from "../models/responses/graduation/addGraduationResponse";
import { GetByIdGraduation } from "../models/responses/graduation/getByIdGraduation";
import { GetGraduation } from "../models/responses/graduation/getGraduation";
import { UpdateGraduationResponse } from "../models/responses/graduation/updateGraduationResponse";

class GraduationService extends BaseService<
  GetGraduation,
  GetByIdGraduation,
  AddGraduationRequest,
  AddGraduationResponse,
  UpdateGraduationRequest,
  UpdateGraduationResponse
> {
  public profileGraduation: string;
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "Graduations";
    this.profileGraduation = BASE_API_URL + "ProfileGraduations";
  }
  getByFilter(pageIndex: number=0, pageSize: number=10){
    return this.getAll(pageIndex, pageSize)
}
}

export default new GraduationService();
