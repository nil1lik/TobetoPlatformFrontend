import { GetByUserId } from "../responses/user/getByUserId";
import { GetLanguageByUserId } from "../responses/userProfile/getLanguageByUserId";
import { GetSkillByUserId } from "../responses/userProfile/getSkillByUserId";
import { GetUserDetails } from "../responses/userProfile/getUserDetails"

export interface ProfileContextModel {
    userDetails: GetUserDetails,
    AddUserDetails: (values: GetUserDetails | ((prevState: GetUserDetails) => GetUserDetails)) => void;
    addInfoToUserDetails: (values: GetByUserId) => void;
    addSkillsToUserDetails: (skills: GetSkillByUserId[]) => void;
    addLanguagesToUserDetails: (languages: GetLanguageByUserId[]) => void;
    // addCertificatesToUserDetails: (certificates: GetLanguageByUserId[]) => void;
}