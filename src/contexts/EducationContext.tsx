// EducationContext.js

import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface EducationContextProps {
//   children: ReactNode;
// }

const EducationContext = createContext<{
  educationData: any[]; 
  setEducationData: React.Dispatch<React.SetStateAction<any[]>>; 
}>({
  educationData: [],
  setEducationData: () => {}
});

export const EducationProvider = (props:any) => {
  const [educationData, setEducationData] = useState<any[]>([]);

  return (
    <EducationContext.Provider value={{ educationData, setEducationData }}>
      {props.children}
    </EducationContext.Provider>
  );
};

export const useEducation = () => useContext(EducationContext);
