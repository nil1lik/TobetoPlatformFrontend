import React, { createContext, useState, useContext } from "react";
import { EducationContextModel } from "../models/contextModels/educationContextModel";
import educationService from "../services/educationService";
import { pageCalculate } from "../utilities/Helpers/pageCountByItemsCalculator";
import userProfileService from "../services/userProfileService";
import { useAuthContext } from "./AuthContext";

const initialState: EducationContextModel = {
  educationData: [],
  setEducationData: () => {},
  childState: 0,
  setChildState: () => {},
  fetchEducation: async (count: number ) => {},
  setPageCount: () => {},
  pageCount: null,
};

const EducationContext = createContext(initialState);

export const EducationProvider = (props: any) => {
  const [educationData, setEducationData] = useState<any[]>(
    initialState.educationData
  );
  const [childState, setChildState] = useState<number>(initialState.childState);
  const [pageCount, setPageCount] = useState<any>(initialState.pageCount);
  const fetchEducation = async (userId:number,count: number = 8) => {
    try {
      const result = await userProfileService.getEducationByUserId(userId);
      // setPageCount(pageCalculate(result.data.count, count));
      console.log(result.data.educationDtoItems)
      setEducationData(result.data.educationDtoItems);
    } catch (error) {
      console.error(
        "Eğitim verilerini getirme sırasında bir hata oluştu:",
        error
      );
    }
  };

  return (
    <EducationContext.Provider
      value={{
        educationData,
        setEducationData,
        childState,
        setChildState,
        fetchEducation,
        pageCount,
        setPageCount,
      }}
    >
      {props.children}
    </EducationContext.Provider>
  );
};

export const useEducation = () => useContext(EducationContext);
