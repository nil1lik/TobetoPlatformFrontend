import { createContext, useState } from "react";
import React from "react";

const SearchContext = createContext({
  searchQuery: "",
  setSearchQuery: (query: string) => {}
})

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
