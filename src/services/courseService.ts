import { UpdateCourseResponse } from './../models/responses/course/updateCourseResponse';
import { UpdateCourseRequest } from './../models/requests/course/updateCourseRequest';
import { AddCourseResponse } from './../models/responses/course/addCourseResponse';
import { AddCourseRequest } from './../models/requests/course/addCourseRequest';
import { GetByIdCourseResponse } from './../models/responses/course/getByIdCourseResponse';
import { BaseService } from "../core/services/baseService";
import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
import { BASE_API_URL } from '../core/environment/environment';
import { GetCourseResponse } from '../models/responses/course/getCourseResponse';
import axios, { AxiosResponse } from 'axios';
import { GetAsyncLessonsByCourseIdResponse } from '../models/responses/course/getAsyncLessonsByCourseId';

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
}

export default new CourseService();