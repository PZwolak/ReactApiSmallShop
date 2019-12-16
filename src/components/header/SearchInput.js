import React from "react";

const SearchInput = () => {
  const handleInputValue = e => {
    console.log(e.target.value);
  };
  return (
    <div className="searchInput col-6">
      <input type="text" onChange={handleInputValue} />
    </div>
  );
};

export default SearchInput;
