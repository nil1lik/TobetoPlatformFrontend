// AuthContext.js
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from "react";
import { boolean } from "yup";
import { AuthContextModel } from "../models/contextModels/authContextModel";

const initialState:AuthContextModel = {
  auth: false,
  handleSetAuth: () => {},
  userId: "",
  handleSetUserId: () => {}
}


export const AuthContext = createContext<AuthContextModel>(initialState);

const AuthProvider = (props: any) => {
  const [userId, setUserId] = useState<string>(initialState.userId);
  const [auth, setAuth] = useState<boolean>(initialState.auth); 
  const handleSetAuth= (value: boolean) => {
    setAuth(value)
  }
  const handleSetUserId= (value: string) => {
    setUserId(value)
  }
  return (
    <AuthContext.Provider value={{ auth, handleSetAuth, userId, handleSetUserId }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
