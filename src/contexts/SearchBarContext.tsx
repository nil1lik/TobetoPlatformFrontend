import React, { createContext, useContext, useState } from "react";
import { SearchbarContextModel } from "../models/contextModels/searchbarContextModel";

const initialState: SearchbarContextModel = {
  searchbarValue: "",
  handleSearchbarChange: () => {},
  searchbarFocus: false,
  searchbarBlur: true,
  toggleFocusAndBlurState: () => {},
};

const SearchbarContext = createContext(initialState)

export const SearchbarProvider = (props: any) => {
  const [searchbarValue, setSearchbarValue] = useState<string>(initialState.searchbarValue);
  const [searchbarFocus, setSearchbarFocus] = useState<boolean>(initialState.searchbarFocus);
  const [searchbarBlur, setSearchbarBlur] = useState<boolean>(initialState.searchbarBlur);

  const handleSearchbarChange = (value: string) => {
    setSearchbarValue(value);
  };
  const toggleFocusAndBlurState = () => {
    setSearchbarFocus(prevState => !prevState);
    setSearchbarBlur(prevState => !prevState);
  };

  return (
    <SearchbarContext.Provider value={{ searchbarValue, handleSearchbarChange, searchbarFocus, searchbarBlur, toggleFocusAndBlurState}}>
      {props.children}
    </SearchbarContext.Provider>
  );
};


export const useSearchbarContext = () => useContext(SearchbarContext);