import { UpdateCourseResponse } from './../models/responses/course/updateCourseResponse';
import { UpdateCourseRequest } from './../models/requests/course/updateCourseRequest';
import { AddCourseResponse } from './../models/responses/course/addCourseResponse';
import { AddCourseRequest } from './../models/requests/course/addCourseRequest';
import { GetByIdCourseResponse } from './../models/responses/course/getByIdCourseResponse';
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from '../core/environment/environment';
import { GetCourseResponse } from '../models/responses/course/getCourseResponse';
import axios, { AxiosResponse } from 'axios';
import { GetAsyncLessonsByCourseIdResponse } from '../models/responses/course/getAsyncLessonsByCourseId';
import { GetSyncLessonsByCourseIdResponse } from '../models/responses/course/getSyncLessonsByCourseId';

class CourseService extends BaseService<
    GetCourseResponse,
    GetByIdCourseResponse,
    AddCourseRequest,
    AddCourseResponse,
    UpdateCourseRequest,
    UpdateCourseResponse
>
{
    constructor(){
        super();
        this.apiUrl = BASE_API_URL + "Courses"
    }
    getByFilter(){ }

    getAsyncLessonsByCourseId(id:number): Promise<AxiosResponse<GetAsyncLessonsByCourseIdResponse, any>>{
        return axios.get<GetAsyncLessonsByCourseIdResponse>(
            this.apiUrl + "/getAsyncLesson/" + id
        ); 
    }

    getSyncLessonsByCourseId(id:number): Promise<AxiosResponse<GetSyncLessonsByCourseIdResponse, any>>{
        return axios.get<GetSyncLessonsByCourseIdResponse>(
            this.apiUrl + "/getSyncLesson/" + id
        ); 
    }

   
}

export default new CourseService();