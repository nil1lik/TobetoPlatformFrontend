import axios from 'axios';

export default class AnnouncementService {
    getAnnouncement(){
        return axios.get("http://localhost:5278/api/Announcements/AnnouncementTypeList?PageIndex=0&PageSize=3")
      }
};
