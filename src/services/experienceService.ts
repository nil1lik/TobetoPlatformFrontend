import { GetExperience, GetExperienceItem } from './../models/responses/experience/getExperience';
import axios, { AxiosResponse } from "axios";
import { AddExperienceRequest } from "../models/requests/experience/addExperienceRequest";
import { BASE_API_URL } from "../core/environment/environment";
import { BaseService } from "../core/services/baseService";
import { GetByIdExperience } from "../models/responses/experience/getByIdExperience";
import { UpdateExperienceRequest } from "../models/requests/experience/updateExperienceRequest";
import { AddExperienceResponse } from "../models/responses/experience/addExperienceResponse";
import { UpdateExperienceResponse } from "../models/responses/experience/updateExperienceResponse";

class ExperienceService extends BaseService<
    GetExperience,
    GetByIdExperience,
    AddExperienceRequest,
    UpdateExperienceRequest,
    AddExperienceResponse,
    UpdateExperienceResponse
>{
    constructor(){
        super();
        this.apiUrl = BASE_API_URL + "Experiences";
        this.dtoUrl = this.apiUrl + "/ExperienceInformationsListDto";
    }
    getByFilter(pageIndex: number=0, pageSize: number=10){
        return this.getAll(pageIndex, pageSize)
    }
    getExperience(
        pageIndex: number = 0,
        pageSize: number = 5
      ): Promise<AxiosResponse<GetExperience, any>> {
        return axios.get<GetExperience>(
            this.dtoUrl +`?PageIndex=${pageIndex}&PageSize=${pageSize}`
        );
      }
    

    addExperience(request: AddExperienceRequest): Promise<AxiosResponse<AddExperienceResponse, any>> {
		return axios.post<AddExperienceResponse>(this.apiUrl, request);

	}
}

export default new ExperienceService();