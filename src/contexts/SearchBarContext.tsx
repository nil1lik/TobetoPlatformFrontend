import React, { createContext, useContext, useState } from "react";
import { SearchbarContextModel } from "../models/contextModels/searchbarContextModel";

const initialState: SearchbarContextModel = {
  searchbarValue: "",
  handleSearchbarChange: () => {},
};

const SearchbarContext = createContext(initialState)

export const SearchbarProvider = (props: any) => {
  const [searchbarValue, setSearchbarValue] = useState<string>("");

  const handleSearchbarChange = (value: string) => {
    setSearchbarValue(value);
  };

  return (
    <SearchbarContext.Provider value={{ searchbarValue, handleSearchbarChange }}>
      {props.children}
    </SearchbarContext.Provider>
  );
};


export const useSearchbarContext = () => useContext(SearchbarContext);