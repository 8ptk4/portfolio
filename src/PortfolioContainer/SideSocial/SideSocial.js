import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./SideSocial.css";

function SideSocial() {
  return (
    <div className="social-icons">
      <div className="social-icon">
        <a href="#">
          <FacebookIcon />
        </a>
      </div>
      <div className="social-icon">
        <a href="#">
          <GoogleIcon />
        </a>
      </div>
      <div className="social-icon">
        <a href="#">
          <InstagramIcon />
        </a>
      </div>
      <div className="social-icon">
        <a href="#">
          <YouTubeIcon />
        </a>
      </div>
      <div className="social-icon">
        <a href="#">
          <TwitterIcon />
        </a>
      </div>

      <div className='social-icons-line'></div>

    </div>
  )
}

export default SideSocial
