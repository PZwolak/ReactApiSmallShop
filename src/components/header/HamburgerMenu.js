import React from "react";

const HamburgerMenu = () => {
  return (
    <div className="menu col-2">
      <nav role="navigation">
        <div className="menu__toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul className="menu__items">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
