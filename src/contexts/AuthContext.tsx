// AuthContext.js
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type AuthContextType = {
  auth?: { isAuthenticated: boolean; token: string } | null; 
  setAuth: Dispatch<SetStateAction<any>>;
};

export const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {},
});

const AuthProvider = (props: any) => {
  const [auth, setAuth] = useState<{ isAuthenticated: boolean; token: string } | null>(null); 

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;
