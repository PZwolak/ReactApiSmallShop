import React from "react";
import "./Header.scss";
import HamburgerMenu from "./HamburgerMenu";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="header container mw-100">
      <div className="row">
        <HamburgerMenu />
        <button type="text" onClick={this.props.searchValue}>
          elo elo leo
        </button>
        {/* <SearchInput searchValue={props} /> */}
      </div>
    </header>
  );
};

export default Header;
