import React from 'react'
import './Header.css'
import Switch from '@mui/material/Switch';

export default function Header(props) {
  const label = { inputProps: { 'aria-label': 'Toggle' } };

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
            <a href="#anchor-projects">
              <span className='header_nav_item_number'>03. </span>
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
        <Switch
          onClick={() => props.changeTheme(true)}
          {...label}
          defaultChecked
          color={'primary'}
        />
      </div>
    </div>
  )
}
