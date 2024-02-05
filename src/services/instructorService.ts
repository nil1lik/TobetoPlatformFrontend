import { BASE_API_URL } from "../core/environment/environment";
import { BaseService } from "../core/services/baseService";
import { AddInstructorRequest } from "../models/requests/instructor/addInstructorRequest";
import { UpdateInstructorRequest } from "../models/requests/instructor/updateInstructorRequest";
import { AddInstructorResponse } from "../models/responses/instructor/addInstructorResponse";
import { GetByIdInstructorResponse } from "../models/responses/instructor/getByIdInstructorResponse";
import { GetInstructor } from "../models/responses/instructor/getInstructorResponse";
import { UpdateInstructorResponse } from "../models/responses/instructor/updateInstructorResponse";

class InstructorService extends BaseService<
GetInstructor,
GetByIdInstructorResponse,
AddInstructorResponse,
UpdateInstructorResponse,
AddInstructorRequest,
UpdateInstructorRequest>{

    constructor(){
        super();
        this.apiUrl = BASE_API_URL + "Instructors";
    }

    getByFilter(pageIndex: number = 0, pageSize: number=50){
        return this.getAll(pageIndex,pageSize);
    }
}


export default new InstructorService();