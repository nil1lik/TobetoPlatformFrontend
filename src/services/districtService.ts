import { UpdateDistrictResponse } from '../models/responses/district/updateDistrictResponse';
import { AddDistrictResponse } from "../models/responses/district/addDistrictResponse";
import { GetByIdDistrictResponse } from "../models/responses/district/getByIdDistrictResponse";
import { GetDistrict } from "../models/responses/district/getDistrictResponse";
import { BaseService } from "../core/services/baseService";
import { AddDistrictRequest } from '../models/requests/district/addDistrictRequest';
import { UpdateDistrictRequest } from '../models/requests/district/updateDistrictRequest';
import { BASE_API_URL } from '../core/environment/environment';

class DistrictService extends BaseService<
GetDistrict,
GetByIdDistrictResponse,
AddDistrictResponse,
UpdateDistrictResponse,
AddDistrictRequest,
UpdateDistrictRequest
>{
    constructor(){
        super();
        this.apiUrl = BASE_API_URL + "Districts";
    }

    getByFilter(pageIndex: number=0, pageSize: number = 50){
        return this.getAll(pageIndex,pageSize);
    }
}

export default new DistrictService();