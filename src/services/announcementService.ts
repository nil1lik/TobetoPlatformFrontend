import { UpdateAnnouncementResponse } from "../models/responses/announcement/updateAnnouncementResponse";
import { UpdateAnnouncementRequest } from "../models/requests/announcement/updateAnnouncementRequest";
import { AddAnnouncementResponse } from "../models/responses/announcement/addAnnouncementResponse";
import { AddAnnouncementRequest } from "../models/requests/announcement/addAnnouncementRequest";
import { GetByIdAnnouncement } from "../models/responses/announcement/getByIdAnnouncement";
import { GetAnnouncement } from "../models/responses/announcement/getAnnouncement";
import axios from "axios";

import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../core/environment/environment";
import { GetAnnouncementTypeList } from "../models/responses/announcement/getAnnouncementTypeList";
import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInterceptors";

class AnnouncementService extends BaseService<
  GetAnnouncement,
  GetByIdAnnouncement,
  AddAnnouncementRequest,
  AddAnnouncementResponse,
  UpdateAnnouncementRequest,
  UpdateAnnouncementResponse
> {
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "Announcements";
    this.dtoUrl = this.apiUrl + "/AnnouncementTypeList";
  }
  getByFilter(pageIndex: number = 0, pageSize: number = 2) {
    return this.getAll(pageIndex, pageSize); 
  }

  getAllAnnouncementTypeList(
    pageIndex: number = 0,
    pageSize: number = 3
  ): Promise<AxiosResponse<GetAnnouncementTypeList, any>> {
    return axiosInstance.get<GetAnnouncementTypeList>(
      this.dtoUrl + `?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }
}

export default new AnnouncementService();
