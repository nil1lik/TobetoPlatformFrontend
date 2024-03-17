import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../core/environment/environment";
import { BaseService } from "../core/services/baseService";
import { AddSyncLessonRequest } from "../models/requests/syncLesson/addSyncLessonRequest";
import { UpdateSyncLessonRequest } from "../models/requests/syncLesson/updateSyncLessonRequest";
import { AddSyncLessonResponse } from "../models/responses/syncLesson/addSyncLessonResponse";
import { GetByIdSyncLessonResponse } from "../models/responses/syncLesson/getByIdSyncLessonResponse";
import { GetSyncLesson } from "../models/responses/syncLesson/getSyncLesson";
import { UpdateSyncLessonResponse } from "../models/responses/syncLesson/updateSyncLessonResponse";
import {  GetSyncLessonsByCourseIdResponse } from "../models/responses/course/getSyncLessonsByCourseId";
import { GetLessonDetailBySyncLessonId } from "../models/responses/syncLesson/getLessonDetailBySyncLessonId";

class SyncLessonService extends BaseService<
GetSyncLesson,
GetByIdSyncLessonResponse,
AddSyncLessonResponse,
AddSyncLessonRequest,
UpdateSyncLessonResponse,
UpdateSyncLessonRequest 
>{
    constructor(){
        super();
        this.apiUrl = BASE_API_URL + "SyncLessons/";
    }

    // getByIdSyncLessonDetail( 
    //     id:number):Promise<AxiosResponse<GetByIdSyncLessonResponse,any>>{
    //       return axios.get<GetByIdSyncLessonResponse>(
    //         this.apiUrl + "getLessonDetail/" + id
    //       );
    //     }

    getLessonDetailBySyncLessonId(id: number): Promise<AxiosResponse<GetLessonDetailBySyncLessonId,any>>{
      return axios.get<GetLessonDetailBySyncLessonId>(
        this.apiUrl + "getLessonDetail/" + id
      );
    }
}

export default new SyncLessonService();