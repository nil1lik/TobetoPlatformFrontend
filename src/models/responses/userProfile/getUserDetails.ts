import { getCertificateByUserId } from "../certificate/getCertificatesByUserId";
import { GetLanguageByUserId } from "./getLanguageByUserId";
import { GetExamByUserId } from "./getExamByUserId";
import { GetExperienceByUserId} from "./getExperienceByUserId";
import { GetGraduationByUserId} from "./getGraduationByUserId";
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
  graduationsDtoItems?: GetGraduationByUserId[]
  experiencesDtoItems?: GetExperienceByUserId[]
  skillDtoItems?: GetSkillByUserId[];
  languageDtoItems?: GetLanguageByUserId[];
  certificatesDtoItems?: getCertificateByUserId[];
  examDtoItems?: GetExamByUserId[];
  socialMediaAccountsItems?: GetSocialMediaAccountByUserIdItem[];
}
