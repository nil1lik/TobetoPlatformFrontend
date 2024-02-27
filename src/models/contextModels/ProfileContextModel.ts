import { getCertificateByUserId } from "../responses/certificate/getCertificatesByUserId";
import { GetByUserId } from "../responses/user/getByUserId";
import { GetLanguageByUserId } from "../responses/userProfile/getLanguageByUserId";
import { GetSkillByUserId } from "../responses/userProfile/getSkillByUserId";
import { GetUserDetails } from "../responses/userProfile/getUserDetails"
import { GetSocialMediaAccount } from '../responses/socialMediaAccount/getSocialMediaAccount';
import { GetSocialMediaAccountByUserIdItem } from '../responses/userProfile/getSocialMediaAccountByUserId';
import { GetExamByUserId } from "../responses/userProfile/getExamByUserId";

export interface ProfileContextModel {
    userDetails: GetUserDetails,
    addInfoToUserDetails: (value: GetByUserId) => void;
    addUserDetails: (value: GetUserDetails | ((prevState: GetUserDetails) => GetUserDetails)) => void;
    addSkillsToUserDetails: (skill: GetSkillByUserId[]) => void;
    addLanguagesToUserDetails: (language: GetLanguageByUserId[]) => void;
    addCertificatesToUserDetails: (certificate: getCertificateByUserId[]) => void;
    addExamsToUserDetails: (exams: GetExamByUserId[]) => void;
    addSocialMediaAccountsToUserDetails: (socialMediaAccountsItems: GetSocialMediaAccountByUserIdItem[]) => void;
}
