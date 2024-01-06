"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseService_1 = require("./baseService");
const environment_1 = require("../environment/environment");
class VideoService extends baseService_1.BaseService {
    constructor() {
        super();
        this.apiUrl = environment_1.BASE_API_URL + "Video";
    }
    getByFilter() { }
}
exports.default = new VideoService();
