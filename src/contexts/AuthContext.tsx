// AuthContext.js
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type AuthContextType = {
  auth: any; 
  setAuth: Dispatch<SetStateAction<any>>;
};

export const AuthContext = createContext<AuthContextType>({
  auth: false,
  setAuth: () => {},
});

const AuthProvider= (props:any) => {
  const [auth, setAuth] = useState<any>(false); 

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
