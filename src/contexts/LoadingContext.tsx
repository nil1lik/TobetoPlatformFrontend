import React, { createContext, useContext, useState } from "react";
import { LoadingContextModel } from "../models/contextModels/loadingContextModel";

const initialState: LoadingContextModel = {
  loading: 0,
  handleSetLoading: (value: number | ((prev: number) => number)) => {},
};

export const LoadingContext = createContext<LoadingContextModel>(initialState);

export const LoadingContextProvider = (props: any) => {
  const [loading, setLoading] = useState<number>(initialState.loading);

  const handleSetLoading = (value: number | ((prev: number) => number)) => {
    setLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ loading, handleSetLoading }}>
      {props.children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);
