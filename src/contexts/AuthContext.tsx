// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import { AuthContextModel } from "../models/contextModels/authContextModel";

const initialState: AuthContextModel = {
  auth: false,
  handleSetAuth: () => {},
  userId: "",
  handleSetUserId: () => {},
  isFirstLogin: true,
  handleSetIstFirstLogin: (value: boolean) => {},
};

export const AuthContext = createContext<AuthContextModel>(initialState);

const AuthProvider = (props: any) => {
  const [userId, setUserId] = useState<string>(initialState.userId);
  const [auth, setAuth] = useState<boolean>(initialState.auth);
  const [isFirstLogin, setIsFirstLogin] = useState<boolean>(initialState.auth);

  const handleSetAuth = (value: boolean) => {
    setAuth(value);
  };
  const handleSetUserId = (value: string) => {
    setUserId(value);
  };
  const handleSetIstFirstLogin = (value: boolean) => {
    setIsFirstLogin(value);
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        handleSetAuth,
        userId,
        handleSetUserId,
        isFirstLogin,
        handleSetIstFirstLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
