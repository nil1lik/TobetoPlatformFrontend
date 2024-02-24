import toastr from "toastr";
import { BUSINESS_ERROR, VALIDATION_ERROR } from "./errorTypes";
import { errHandlerErrNetwork } from "../../utilities/Constants/constantValues";
export const handleError = (error: any) => {
    console.log(error);
    if (error.code && error.code == "ERR_NETWORK") {
        toastr.error(errHandlerErrNetwork);
    }

    if (error.response && error.response.data && error.response.data.type) {
        let type = error.response.data.type;

        switch (type) {
            case BUSINESS_ERROR:
                handleBusinessError(error.response.data);
                break;
            case VALIDATION_ERROR:
                handleValidationError(error.response.data);
                break;
        }
    }
};

export const handleBusinessError = (error: any) => {
    toastr.error(error.detail);
}

export const handleValidationError = (error: any) => {
    toastr.error(error);

    Object.keys(error.errors).forEach(key => {
        toastr.error(`${key}: ${error.errors[key]}`);
    });
};

export const handleDefault = (error: any) => {
    console.log("Bilinmeyen hata...");
}

