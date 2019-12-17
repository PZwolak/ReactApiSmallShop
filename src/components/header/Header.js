import React from "react";
import "./Header.scss";
import HamburgerMenu from "./HamburgerMenu";
import SearchInput from "./SearchInput";

const Header = props => {
  return (
    <header className="header container mw-100">
      <div className="row header__row">
        <HamburgerMenu />
        <SearchInput
          searchValue={props.searchValue}
          sendInputValue={props.sendInputValue}
        />
      </div>
    </header>
  );
};

export default Header;
