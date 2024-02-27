import React, { createContext, useContext, useState } from "react";
import { ProfileContextModel } from "../models/contextModels/ProfileContextModel";
import { GetUserDetails } from "../models/responses/userProfile/getUserDetails";
import { GetSkillByUserId } from "../models/responses/userProfile/getSkillByUserId";
import { GetByUserId } from "../models/responses/user/getByUserId";
import { GetLanguageByUserId } from "../models/responses/userProfile/getLanguageByUserId";
import { getCertificateByUserId } from "../models/responses/certificate/getCertificatesByUserId";
import { GetExamByUserId } from "../models/responses/userProfile/getExamByUserId";
import { GetSocialMediaAccountByUserIdItem } from "../models/responses/userProfile/getSocialMediaAccountByUserId";
import { GetGraduationByUserId, GetGraduationByUserIdList } from "../models/responses/userProfile/getGraduationByUserId";
import { GetExperienceByUserId, GetExperienceByUserIdList } from "../models/responses/userProfile/getExperienceByUserId";

const initialState: ProfileContextModel = {
  userDetails: {
    userId: 0,
    userProfileId: 0,
    firstName: "",
    lastName: "",
    email: "",
    cityId: 0,
    districtId: 0,
    cityName: "",
    districtName: "",
    nationalIdentity: "",
    phone: "",
    birthDate: "",
    country: "",
    addressDetail: "",
    description: "",
    skillDtoItems: [],
    languageDtoItems: [],
    examDtoItems: [],
    graduationsDtoItems: [],
    experiencesDtoItems: [],
    socialMediaAccountsItems: [],
  },
  addInfoToUserDetails: () => {},
  addUserDetails: () => {},
  addSkillsToUserDetails: () => {},
  addLanguagesToUserDetails: () => {},
  addCertificatesToUserDetails: () => {},
  addExamsToUserDetails: () => {},
  addSocialMediaAccountsToUserDetails: () => {},
  addGraduationsToUserDetails: () => {},
  addExperiencesToUserDetails: () => {},
};

export const ProfileContext = createContext(initialState);

const ProfileProvider = (props: any) => {
  const [userDetails, setUserDetails] = useState(initialState.userDetails);
  
  const addInfoToUserDetails = (value: GetByUserId) => {
    setUserDetails((prevState: GetUserDetails) => ({
      ...prevState,
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
    }));
  };
  const addUserDetails = (
    value: GetUserDetails | ((prevState: GetUserDetails) => GetUserDetails)
  ) => {
    setUserDetails(value);
  };

  const addSkillsToUserDetails = (skills: GetSkillByUserId[]) => {
    setUserDetails((prevState) => ({
      ...prevState,
      skillDtoItems: skills,
    }));
  };

  const addExamsToUserDetails = (exams: GetExamByUserId[]) => {
    console.log(exams)
    setUserDetails((prevState) => ({
      ...prevState,
      examDtoItems: exams,
    }));
  };

  const addGraduationsToUserDetails = (graduations: GetGraduationByUserId[]) => {
    setUserDetails((prevState) => ({
      ...prevState,
      graduationsDtoItems: graduations,
    }));
  };

  const addExperiencesToUserDetails = (experiences: GetExperienceByUserId[]) => {
    setUserDetails((prevState) => ({
      ...prevState,
      experiencesDtoItems: experiences,
    }));
  };

  const addSocialMediaAccountsToUserDetails = (socialMediaAccountsItems: GetSocialMediaAccountByUserIdItem[]) => {
    setUserDetails((prevState) => ({
      ...prevState,
      socialMediaAccountsItems: socialMediaAccountsItems,
    }))
  };

  const addLanguagesToUserDetails = (languages: GetLanguageByUserId[]) => {
    setUserDetails((prevState) => ({
      ...prevState,
      languageDtoItems: languages,
    }));
  };

  const addCertificatesToUserDetails = (certificates: getCertificateByUserId[]) => {
    setUserDetails((prevState) => ({
      ...prevState,
      certificatesDtoItems: certificates,
    }));
  };


  return (
    <ProfileContext.Provider
      value={{
        userDetails,
        addUserDetails,
        addSkillsToUserDetails,
        addInfoToUserDetails,
        addLanguagesToUserDetails,
        addCertificatesToUserDetails,
        addExamsToUserDetails,
        addSocialMediaAccountsToUserDetails,
        addGraduationsToUserDetails,
        addExperiencesToUserDetails,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;

export const useProfileContext = () => useContext(ProfileContext);
