import axios from 'axios';
import { BaseService } from '../core/services/baseService';
import { BASE_API_URL } from '../core/environment/environment';
import { GetExam } from '../models/responses/exam/getExam';
import { GetByIdExam } from '../models/responses/exam/getByIdExam';
import { AddExamRequest } from '../models/requests/exam/addExamRequest';
import { UpdateExamRequest } from '../models/requests/exam/updateExamRequest';
import { AddExamResponse } from '../models/responses/exam/addExamResponse';
import { UpdateExamResponse } from '../models/responses/exam/updateExamResponse';


//eski hali:
// export default class ExamService {
//     getExam(){
//         return axios.get("http://localhost:5278/api/Exams?PageIndex=0&PageSize=1")
//     }
// };

class ExamService extends BaseService<
    GetExam,
    GetByIdExam,
    AddExamRequest,
    UpdateExamRequest,
    AddExamResponse,
    UpdateExamResponse
>
{
    constructor(){
        super();
        this.apiUrl = BASE_API_URL + "Exams/"
    }
    getByFilter(pageIndex: number=0, pageSize: number=1) {
        return this.getAll(pageIndex, pageSize)
    }

}

export default new ExamService();