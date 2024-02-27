import { GetExperienceByUserId, GetExperienceByUserIdList } from './../responses/userProfile/getExperienceByUserId';
import { AddSocialMediaAccountRequest } from './../requests/socialMediaAccount/addSocialMediaAccountRequest';
import { GetByUserId } from "../responses/user/getByUserId";
import { GetExamByUserId } from "../responses/userProfile/getExamByUserId";
import { GetSkillByUserId } from "../responses/userProfile/getSkillByUserId";
import { GetUserDetails } from "../responses/userProfile/getUserDetails"
import { GetSocialMediaAccountByUserIdItem } from '../responses/userProfile/getSocialMediaAccountByUserId';
import { GetGraduationByUserId } from '../responses/userProfile/getGraduationByUserId';

export interface ProfileContextModel {
    userDetails: GetUserDetails, 
    AddUserDetails: (value: GetUserDetails | ((prevState: GetUserDetails) => GetUserDetails)) => void;
    addSkillsToUserDetails: (skills: GetSkillByUserId[]) => void;
    addExamsToUserDetails: (exams: GetExamByUserId[]) => void;
    addSocialMediaAccountsToUserDetails: (medias: GetSocialMediaAccountByUserIdItem[]) => void;
    addInfoToUserDetails: (skills: GetByUserId) => void;
    addGraduationsToUserDetails: (graduations: GetGraduationByUserId[]) => void;
    addExperiencesToUserDetails: (experiences: GetExperienceByUserId[]) => void;
} 