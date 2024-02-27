import { GetSocialMediaAccountItem } from "../socialMediaAccount/getSocialMediaAccount";
import { GetSkillByUserId } from "./getSkillByUserId";
import { GetSocialMediaAccountByUserIdItem } from "./getSocialMediaAccountByUserId";

export interface GetUserDetails {
  userId: number;
  userProfileId: number;
  firstName: string;
  lastName: string;
  email: string;
  cityId: number;
  districtId: number;
  cityName: string;
  districtName: string;
  nationalIdentity: string;
  phone: string;
  birthDate: string;
  country: string;
  addressDetail: string;
  description: string;
  message?: string;
  skillDtoItems?: GetSkillByUserId[];
  socialMediaAccountItems?: GetSocialMediaAccountByUserIdItem[];
}
