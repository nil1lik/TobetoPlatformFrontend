import { AddSocialMediaAccountRequest } from './../requests/socialMediaAccount/addSocialMediaAccountRequest';
import { GetByUserId } from "../responses/user/getByUserId";
import { GetExamByUserId } from "../responses/userProfile/getExamByUserId";
import { GetSkillByUserId } from "../responses/userProfile/getSkillByUserId";
import { GetUserDetails } from "../responses/userProfile/getUserDetails"
import { GetSocialMediaAccount } from '../responses/socialMediaAccount/getSocialMediaAccount';
import { GetSocialMediaAccountByUserIdItem } from '../responses/userProfile/getSocialMediaAccountByUserId';

export interface ProfileContextModel {
    userDetails: GetUserDetails, 
    AddUserDetails: (value: GetUserDetails | ((prevState: GetUserDetails) => GetUserDetails)) => void;
    addSkillsToUserDetails: (skills: GetSkillByUserId[]) => void;
    addExamsToUserDetails: (exams: GetExamByUserId[]) => void;
    addSocialMediaAccountsToUserDetails: (socialMediaAccountsItems: GetSocialMediaAccountByUserIdItem[]) => void;
    addInfoToUserDetails: (skills: GetByUserId) => void;
} 
