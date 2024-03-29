import { BASE_API_URL } from "../core/environment/environment";
import { AddEducationRequest } from "../models/requests/education/addEducationRequest";
import { UpdateEducationRequest } from "../models/requests/education/updateEducationRequest";
import { AddEducationResponse } from "../models/responses/education/addEducationResponse";
import { GetByIdEducation } from "../models/responses/education/getByIdEducation";
import { GetEducation } from "../models/responses/education/getEducation";
import { UpdateEducationResponse } from "../models/responses/education/updateEducationResponse";
import { BaseService } from "../core/services/baseService";
import axios, { AxiosResponse } from "axios";
import { GetAllEducationAboutResponse } from "../models/responses/education/getAllEducationAboutResponse";
import { GetCourseResponse } from "../models/responses/course/getCourseResponse";
import { GetAllEducationResponse } from "../models/responses/education/getAllEducationResponse";

class EducationService extends BaseService<
  GetEducation,
  GetByIdEducation,
  AddEducationResponse,
  AddEducationRequest,
  UpdateEducationRequest,
  UpdateEducationResponse
> {
  public EducationAbout: string;
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "EducationPaths";
    this.EducationAbout = BASE_API_URL + "EducationAbouts";
    this.dtoUrl = this.EducationAbout + "/EducationAboutDetailDto";
  }
  getByFilter(pageIndex: number = 0, pageSize: number = 16) {
    return this.getAll(pageIndex, pageSize);
  }

  getByIdEducationAboutDetailDto( 
    id: number
  ): Promise<AxiosResponse<GetAllEducationAboutResponse, any>> {
    return axios.get<GetAllEducationAboutResponse>(this.dtoUrl + "/" + id);
  }

  getEducationPathDetailByIdDto(
    id: number
  ): Promise<AxiosResponse<GetAllEducationResponse, any>> {
    return axios.get<GetAllEducationResponse>(
      this.apiUrl + "/" + "EducationPathDetail/" + id
    );
  }
  getCoursesByEducationId(
    id:number):Promise<AxiosResponse<GetCourseResponse,any>>{
      return axios.get<GetCourseResponse>(
        this.apiUrl + "/Courses/" + id
      );
    }
  
}

export default new EducationService();
