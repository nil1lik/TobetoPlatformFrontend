import React, { useState } from "react";
import { Button, Form} from "react-bootstrap";
import '../SearchBar/searchBar.css'
import { useSearchContext } from "../../contexts/SearchBarContext";

type Props = {
  formClassName?: string;
  buttonClassName?: string;
  searchBoxClassName?: string;
  svgClassName?:string;
};

const SearchBar = (props: Props) => {
  const { searchQuery, setSearchQuery } = useSearchContext();

  const handleChange = (event:any) => {
    const value= event.target.value;
    setSearchQuery(value);
  }

  return (
    <div className={props.searchBoxClassName || "search-box"}>
      <Form.Control
        type="text"
        placeholder="Arama"
        className={props.formClassName || "w-100 mr-sm-2"}
        onChange={handleChange}
      />
      <Button className={props.buttonClassName || "search-btn"}>
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={ props.svgClassName || "search-icon"}
        >
          <path
            d="M15.125 26.125C21.2001 26.125 26.125 21.2001 26.125 15.125C26.125 9.04987 21.2001 4.125 15.125 4.125C9.04987 4.125 4.125 9.04987 4.125 15.125C4.125 21.2001 9.04987 26.125 15.125 26.125Z"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.8758 28.8748L22.8945 22.8936"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.8758 28.8748L22.8945 22.8936"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};

export default SearchBar;
