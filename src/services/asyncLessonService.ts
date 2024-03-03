import { UpdateAsyncLessonRequest } from './../models/requests/asyncLesson/updateAsyncLessonRequest';
import { UpdateAsyncLessonResponse } from "./../models/responses/asyncLesson/updateAsyncLessonResponse";
import axios,{ AxiosResponse } from "axios";
import { BASE_API_URL } from "../core/environment/environment";
import { GetByIdAsyncLessonResponse } from "../models/responses/asyncLesson/getByIdAsyncLessonResponse";
import axiosInstance from "../core/interceptors/axiosInterceptors";
import { BaseService } from "../core/services/baseService";
import { AddAsyncLessonResponse } from "../models/responses/asyncLesson/addAsyncLessonResponse";
import { GetAsyncLesson } from "../models/responses/asyncLesson/getAsyncLesson";
import { AddAsyncLessonRequest } from "../models/requests/asyncLesson/addAsyncLessonRequest";

class AsyncLessonService extends BaseService<
  GetAsyncLesson,
  GetByIdAsyncLessonResponse,
  AddAsyncLessonResponse,
  AddAsyncLessonRequest,
  UpdateAsyncLessonResponse,
  UpdateAsyncLessonRequest
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "AsyncLessons/";
  }

  // getById(id: number): Promise<AxiosResponse<GetByIdAsyncLessonResponse, any>> {
  //   return axios.get<GetByIdAsyncLessonResponse>(this.apiUrl + id);
  // } 

  getByIdAsyncLessonDetail( 
    id:number):Promise<AxiosResponse<GetByIdAsyncLessonResponse,any>>{
      return axios.get<GetByIdAsyncLessonResponse>(
        this.apiUrl + "getLessonDetail/" + id
      );
    }
}

export default new AsyncLessonService();