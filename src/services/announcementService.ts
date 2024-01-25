import { UpdateAnnouncementResponse } from './../models/responses/announcement/updateAnnouncementResponse';
import { UpdateAnnouncementRequest } from './../models/requests/announcement/updateAnnouncementRequest';
import { AddAnnouncementResponse } from './../models/responses/announcement/addAnnouncementResponse';
import { AddAnnouncementRequest } from './../models/requests/announcement/addAnnouncementRequest';
import { GetByIdAnnouncement } from './../models/responses/announcement/getByIdAnnouncement';
import { GetAnnouncement } from './../models/responses/announcement/getAnnouncement';
// import axios from 'axios';

import { BaseService } from "./baseService";
import { BASE_API_URL } from '../environment/environment';

// export default class AnnouncementService {
//     getAnnouncement(){
//         return axios.get("http://localhost:5278/api/Announcements/AnnouncementTypeList?PageIndex=0&PageSize=3")
//       }
// };

class AnnouncementService extends BaseService<
  GetAnnouncement,
  GetByIdAnnouncement,
  AddAnnouncementRequest,
  AddAnnouncementResponse,
  UpdateAnnouncementRequest,
  UpdateAnnouncementResponse
>{
  constructor(){
    super();
    this.apiUrl = BASE_API_URL + "Announcements/AnnouncementTypeList";
  }
  getByFilter(pageIndex: number = 0, pageSize: number = 2) {
    return this.getAll(pageIndex, pageSize); 
  }
}

export default new AnnouncementService();
