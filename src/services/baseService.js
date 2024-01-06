"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const axios_1 = __importDefault(require("axios"));
class BaseService {
    constructor() {
        this.apiUrl = "";
    }
    getAll() {
        return axios_1.default.get(this.apiUrl);
    }
    getById(id) {
        return axios_1.default.get(this.apiUrl + "/" + id);
    }
    add(request) {
        return axios_1.default.post(this.apiUrl, request);
    }
    update(request) {
        return axios_1.default.put(this.apiUrl, request);
    }
    delete(id) {
        return axios_1.default.delete(this.apiUrl + "/" + id);
    }
}
exports.BaseService = BaseService;
