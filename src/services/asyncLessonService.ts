import { UpdateAsyncLessonResponse } from "./../models/responses/asyncLesson/updateAsyncLessonResponse";
import { AxiosResponse } from "axios";
import { BASE_API_URL } from "../core/environment/environment";
import { GetByIdAsyncLessonResponse } from "../models/responses/asyncLesson/getByIdAsyncLessonResponse";
import axiosInstance from "../core/interceptors/axiosInterceptors";
import { BaseService } from "../core/services/baseService";
import { AddAsyncLessonResponse } from "../models/responses/asyncLesson/addAsyncLessonResponse";
import { GetAllAsyncLessonResponse } from "../models/responses/asyncLesson/getAllAsyncLessonResponse";
import { GetAsyncLesson } from "../models/responses/asyncLesson/getAsyncLesson";
import { AddAsyncLessonRequest } from "../models/requests/asyncLesson/addAsyncLessonRequest";
import { UpdateAsyncLesson } from "../models/requests/asyncLesson/updateAsyncLesson";

class AsyncLessonService extends BaseService<
  GetAsyncLesson,
  GetByIdAsyncLessonResponse,
  AddAsyncLessonResponse,
  AddAsyncLessonRequest,
  UpdateAsyncLessonResponse,
  UpdateAsyncLesson
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "AsyncLessons/";
  }

  getById(id: number): Promise<AxiosResponse<GetByIdAsyncLessonResponse, any>> {
    return axiosInstance.get<GetByIdAsyncLessonResponse>(this.apiUrl + id);
  }
}

export default new AsyncLessonService();