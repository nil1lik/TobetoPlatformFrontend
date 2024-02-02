import React, { createContext, useState } from "react";

type Props = {};

export const AuthContext = createContext({});

const AuthProvider = (props: any) => {
  const [auth, setAuth] = useState<any>(false);
  
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
