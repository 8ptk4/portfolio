import React, { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

const Header = (props) => {
  const [dayOrNight, setDayOrNight] = useState(JSON.parse(localStorage.getItem("theme")) ? "sun" : "night");

  return (
    <div className="header">
      <div className="header-logo">
        <span className='header-logo-initial'>P</span>
        <span className='header-logo-latter'>K</span>
      </div>
      <div className="header-nav" >
        <ul>
          <li>
            <a href="#anchor-home">
              <span className='header_nav_item_number'>01. </span>
              <span className='header_nav_item_name'>Home</span>
            </a>
          </li>
          <li>
            <a href="#anchor-about" >
              <span className='header_nav_item_number'>02. </span>
              <span className='header_nav_item_name'>About</span>
            </a>
          </li>
          <li>
            <a href="#anchor-skills">
              <span className='header_nav_item_number'>03. </span>
              <span className='header_nav_item_name'>skills</span>
            </a>
          </li>
          <li>
            <a href="#anchor-projects">
              <span className='header_nav_item_number'>04. </span>
              <span className='header_nav_item_name'>Projects</span>
            </a>
          </li>
          <li>
            <a href="#anchor-contact">
              <span className='header_nav_item_number'>05. </span>
              <span className='header_nav_item_name'>Contact</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="header-resume">
        <span className="theme__icon" onClick={() => {
          props.changeTheme();
          JSON.parse(localStorage.getItem("theme")) ? setDayOrNight("night") : setDayOrNight("sun");
        }}>
          { dayOrNight == "sun" ? <LightModeIcon /> : <DarkModeIcon /> }
        </span>

        <div style={{ position: "absolute", top: "75px", right: "56px" }}>
          <div style={{ display: "flex" }}>
            <div className="theme__text" style={{ fontSize: ".7rem", margin: "9px 11px", width: "130px"}}>You can click here to change the color of the page! </div>
            <div>
              <FontAwesomeIcon className="theme__text" icon={faArrowTurnUp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
