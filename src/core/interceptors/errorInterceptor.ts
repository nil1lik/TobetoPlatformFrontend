import axios from 'axios';
import { BASE_API_URL } from '../environment/environment';
import { handleError } from "../errorHandlers/errorHandler";

const errorInstance = axios.create({
    baseURL: BASE_API_URL,
})

errorInstance.interceptors.request.use(
    request => {
        return request;
    },
    error => {
        return Promise.reject(error);
    }
)

errorInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error)
        handleError(error);
        return Promise.reject(error);
    }
)

export default errorInstance;

