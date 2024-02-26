import React, { createContext, useContext, useState } from "react";
import { ProfileContextModel } from "../models/contextModels/ProfileContextModel";
import { GetUserDetails } from "../models/responses/userProfile/getUserDetails";
import { GetSkillByUserId } from "../models/responses/userProfile/getSkillByUserId";
import { GetByUserId } from "../models/responses/user/getByUserId";
import { GetLanguageByUserId } from "../models/responses/userProfile/getLanguageByUserId";

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
  },
  addInfoToUserDetails: () => {},
  AddUserDetails: () => {},
  addSkillsToUserDetails: () => {},
  addLanguagesToUserDetails: () => {},
};

export const ProfileContext = createContext(initialState);

const ProfileProvider = (props: any) => {
  const [userDetails, setUserDetails] = useState(initialState.userDetails);

  const addInfoToUserDetails = (value: GetByUserId) => {
    // setUserDetails fonksiyonu aracılığıyla userDetails'ı güncelle
    setUserDetails((prevState: GetUserDetails) => ({
      ...prevState,
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
    }));
  };

  const AddUserDetails = (
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

  const addLanguagesToUserDetails = (languages: GetLanguageByUserId[]) => {
    setUserDetails((prevState) => ({
      ...prevState,
      languageDtoItems: languages,
    }));
  };
  return (
    <ProfileContext.Provider
      value={{
        userDetails,
        AddUserDetails,
        addSkillsToUserDetails,
        addInfoToUserDetails,
        addLanguagesToUserDetails,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;

export const useProfileContext = () => useContext(ProfileContext);



const firebaseConfig = {
  apiKey: "AIzaSyCHzJ0TdUSfHyBoS_qwg3CmkWuy4Vzo4_0",
  authDomain: "test-8e62e.firebaseapp.com",
  databaseURL: "https://test-8e62e-default-rtdb.firebaseio.com",
  projectId: "test-8e62e",
  storageBucket: "test-8e62e.appspot.com",
  messagingSenderId: "539617133199",
  appId: "1:539617133199:web:b89b1664c360644ec2e6fa",
  measurementId: "G-06EXZ3W21Q"
};