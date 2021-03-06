import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import PropTypes from "prop-types";
import { useScroll } from "./Scroll";

const navItem = (anchor, number, section) => {
  return (
    <>
      <li>
        <a href={anchor}>
          <span className="header__nav-number">{number}</span>
          <span className="header__nav-name">{section}</span>
        </a>
      </li>
    </>
  );
};

const Header = (props) => {
  const { scrollDirection } = useScroll();
  const [icon, setIcon] = useState(() =>
    localStorage.getItem("THEME") === "dark" ? true : false
  );

  return (
    <div
      className="header"
      style={
        scrollDirection
          ? scrollDirection === "down"
            ? {
                visibility: "visible",
                transition: "all 0.3s ease",
              }
            : {
                visibility: "hidden",
                transition: "all 0.3s ease",
                transform: "translateY(-100%)",
              }
          : null
      }
    >
      <div className="header__logo">
        <span className="header__logo-initial">P</span>
        <span className="header__logo-latter">K</span>
      </div>
      <div className="header__nav">
        <ul>
          {navItem("#anchor-home", "01. ", "Home")}
          {navItem("#anchor-about", "02. ", "About")}
          {navItem("#anchor-skills", "03. ", "Skills")}
          {navItem("#anchor-projects", "04. ", "Projects")}
          {navItem("#anchor-contact", "05. ", "Contact")}
        </ul>
      </div>

      <button
        className="nav-toggle"
        onClick={() => {
          console.log("hejsan fäll ut menyn för faen");
        }}
      >
        <span className="hamburger"></span>
      </button>

      <div className="header__theme">
        <span
          onClick={() => {
            props.changeTheme();
            setIcon(!icon);
          }}
        >
          {icon ? (
            <LightModeIcon className="header__theme-icon" />
          ) : (
            <DarkModeIcon className="header__theme-icon" />
          )}
        </span>

        <div className="header__theme__secondary">
          <div className="header__theme__secondary-animation">
            <div className="header__theme__secondary-text">
              You can click here to change the color of the page!
            </div>
            <FontAwesomeIcon
              className="header__theme__secondary-arrow"
              icon={faArrowTurnUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default Header;
