/*import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext<any>({
    
});

export const LoadingProvider = (props: any) => {
  const [loading, setLoading] = useState(1);

  const addRequest = () => {
    console.log(loading)
    setLoading(prevLoading => prevLoading + 1);
  };

  const removeRequest = () => {
    setLoading(prevLoading => Math.max(0, prevLoading - 1));
  };

  return (
    <LoadingContext.Provider value={{ loading, addRequest, removeRequest }}>
      {props.children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading hook must be used within a LoadingProvider');
  }
  return context;
};*/

import { createContext } from "react";

export const LoadingContext = createContext({});

