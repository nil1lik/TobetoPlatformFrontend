import { GetByUserId } from "../responses/user/getByUserId";
import { GetSkillByUserId } from "../responses/userProfile/getSkillByUserId";
import { GetSocialMediaAccountByUserIdItem } from "../responses/userProfile/getSocialMediaAccountByUserId";
import { GetUserDetails } from "../responses/userProfile/getUserDetails"

export interface ProfileContextModel {
    userDetails: GetUserDetails,
    AddUserDetails: (value: GetUserDetails | ((prevState: GetUserDetails) => GetUserDetails)) => void;
    addSkillsToUserDetails: (skills: GetSkillByUserId[]) => void;
    addInfoToUserDetails: (skills: GetByUserId) => void;
    addSocialMediaAccountToUserDetails: (socialMediaAccount: GetSocialMediaAccountByUserIdItem[]) => void;
}