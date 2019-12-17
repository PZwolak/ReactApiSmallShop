import React from "react";
import logo from "./magnifying-glass.svg";

const SearchInput = props => {
  const placeholder = "SEARCH";
  return (
    <div className="search-input col-6">
      <img
        className="search-input__search-icon"
        src={logo}
        alt="magnifying glass icon for search"
        onClick={props.sendInputValue}
      />
      <input
        className="search-input__input"
        type="text"
        placeholder={placeholder}
        onKeyPress={props.searchValue}
      />
    </div>
  );
};

export default SearchInput;
