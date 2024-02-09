import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import React from "react";

type SearchBarContextType = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<any>>;
};

const SearchContext = createContext<SearchBarContextType>({
  searchQuery: "",
  setSearchQuery: (query: string) => {}
})

export const useSearchContext = () => useContext(SearchContext);

const SearchBarContext = (props: any) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <SearchContext.Provider
    value={{searchQuery, setSearchQuery}}>
        {props.children}
    </SearchContext.Provider>
  );
};

export default SearchBarContext;

