import { BASE_API_URL } from "../core/environment/environment";
import { BaseService } from "../core/services/baseService";
import { AddCertificateRequest } from "../models/requests/certificate/addCertificateRequest";
import { UpdateCertificateRequest } from "../models/requests/certificate/updateCertificateRequest";
import { AddCertificateResponse } from "../models/responses/certificate/addCertificateResponse";
import { GetCertificate } from "../models/responses/certificate/getCertificate";
import { getCertificateByUserId } from "../models/responses/certificate/getCertificatesByUserId";
import { UpdateCertificateResponse } from "../models/responses/certificate/updateCertificateResponse";

class CertificateService extends BaseService<
    GetCertificate,
    getCertificateByUserId,
    AddCertificateRequest,
    AddCertificateResponse,
    UpdateCertificateRequest,
    UpdateCertificateResponse
>{
    constructor(){
        super()
        this.apiUrl = BASE_API_URL + "Certificates";
    }

    getByFilter(){}
}

export default new CertificateService();