import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../core/environment/environment";
import { BaseService } from "../core/services/baseService";
import { UpdateCalendarRequest } from "../models/requests/calendar/updateCalendarRequest";
import { AddCatalogReaquest } from "../models/requests/catalog/addCatalogRequest";
import { AddCatalogResponse } from "../models/responses/catalog/addCatalogResponse";
import { GetByIdCatalogResponse } from "../models/responses/catalog/getByIdCatalogResponse";
import { GetCatalogList } from "../models/responses/catalog/getCatalogResponse";
import { UpdateCatalogResponse } from "../models/responses/catalog/updateCatalogResponse";


class CatalogService extends BaseService<
    GetCatalogList,
    GetByIdCatalogResponse,
    AddCatalogResponse,
    AddCatalogReaquest,
    UpdateCatalogResponse,
    UpdateCalendarRequest
>{
    constructor(){
        super();
        this.apiUrl = BASE_API_URL + "CatalogPaths";
        this.dtoUrl = this.apiUrl + "/CatalogList";
    }

    
	getCatalogAll(pageIndex: number, pageSize: number): Promise<AxiosResponse<GetCatalogList, any>> {
		return axios.get<GetCatalogList>(this.dtoUrl+`?PageIndex=${pageIndex}&PageSize=${pageSize}`);
	}
}

export default new CatalogService();