import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../core/environment/environment";
import { BaseService } from "../core/services/baseService";
import { AddCalendarRequest } from "../models/requests/calendar/addCalendarRequest";
import { UpdateCalendarRequest } from "../models/requests/calendar/updateCalendarRequest";
import { AddCalendarResponse } from "../models/responses/calendar/addCalendarResponse";
import { GetByIdCalendarResponse } from "../models/responses/calendar/getByIdCalendarResponse";
import { GetCalendar } from "../models/responses/calendar/getCalendarResponse";
import { UpdateCalendarResponse } from "../models/responses/calendar/updateCalendarResponse";

class CalendarService extends BaseService<
GetCalendar,
GetByIdCalendarResponse,
AddCalendarResponse,
UpdateCalendarResponse,
AddCalendarRequest,
UpdateCalendarRequest
>{

constructor() {
    super();
    this.apiUrl = BASE_API_URL + "Calendars";
    this.dtoUrl = this.apiUrl + "/GetAllCalendar";    
}

getByFilter(pageIndex: number= 0, pageSize: number=81){
    return this.getAll(pageIndex,pageSize);
}

getCalendar(
    pageIndex: number = 0,
    pageSize: number = 5
  ): Promise<AxiosResponse<GetCalendar, any>> {
    return axios.get<GetCalendar>(
        this.dtoUrl +`?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }

}

export default new CalendarService();