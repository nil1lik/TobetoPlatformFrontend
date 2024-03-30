import { AddProfileLesson } from "../models/responses/profileLesson/addProfileLesson";
import { GetByIdProfileLessonResponse } from "../models/responses/profileLesson/getByIdProfileLessonResponse";
import { GetProfileLessonResponse } from "../models/responses/profileLesson/getProfileLessonResponse";
import { BaseService } from "../core/services/baseService";
import { UpdateProfileLessonResponse } from "../models/responses/profileLesson/updateProfileLessonResponse";
import { UpdateProfileLessonRequest } from "../models/requests/profileLesson/updateProfileLessonRequest";
import { AddProfileLessonRequest } from "../models/requests/profileLesson/addProfileLessonRequest";
import { BASE_API_URL } from "../core/environment/environment";
import axiosInstance from "../core/interceptors/axiosInterceptors";
import axios, { AxiosResponse } from "axios";

class UserProfileLessonService extends BaseService<
  GetProfileLessonResponse,
  GetByIdProfileLessonResponse,
  AddProfileLesson,
  AddProfileLessonRequest,
  UpdateProfileLessonResponse,
  UpdateProfileLessonRequest
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "ProfileLessons";
  }
  updateProfileLesson(
    request: UpdateProfileLessonRequest
  ): Promise<AxiosResponse<UpdateProfileLessonRequest, any>> {
    return axiosInstance.put<UpdateProfileLessonRequest>(this.apiUrl, request);
  }
}
 
export default new UserProfileLessonService();