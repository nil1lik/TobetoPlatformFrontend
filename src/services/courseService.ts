import { UpdateCourseResponse } from './../models/responses/course/updateCourseResponse';
import { UpdateCourseRequest } from './../models/requests/course/updateCourseRequest';
import { AddCourseResponse } from './../models/responses/course/addCourseResponse';
import { AddCourseRequest } from './../models/requests/course/addCourseRequest';
import { GetByIdCourseResponse } from './../models/responses/course/getByIdCourseResponse';
import { GetCourseReponse } from './../models/responses/course/getCourseResponse';
import { BaseService } from "../core/services/baseService";
import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
import { BASE_API_URL } from '../core/environment/environment';

class CourseService extends BaseService<
    GetCourseReponse,
    GetByIdCourseResponse,
    AddCourseRequest,
    AddCourseResponse,
    UpdateCourseRequest,
    UpdateCourseResponse
>
{
    constructor(){
        super();
        this.apiUrl = BASE_API_URL + "Course"
    }
    getByFilter(){ }
}

export default new CourseService();