import React, { useState, useEffect } from 'react'
import "./SectionPresentation.css";
import TypeAnimation from 'react-type-animation';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SectionPresentation = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setQuote(data[Math.round((Math.random() * Math.abs(data.length)))]);
    });
  }, []);

  return (
    <section id="anchor-home" className="presentation">
      <div className='section__container presentation__container'>
        <div className='presentation-details'>

          <div className='presentation-name-pre'>
            <span>Hi, my name is</span>
          </div>

          <div className='presentation-name'>
            <span>Patrik Karlsson</span>
          </div>

          <div className='presentation-carousel'>
            <TypeAnimation
              cursor={true}
              className='presentation-carousel'
              sequence={['Web Designer', 1500, 'Front End Developer', 1500, 'Open For Work', 1500]}
              wrapper="h2"
              repeat={Infinity}
            />
          </div>

          <div className='profile-details-role'>
            <span className='primary-text'>
              <span className='profile-role-tagline'>
                <span className="quote">{ quote.text }</span> - { quote.author }
              </span>
            </span>
          </div>

          <div className='profile-options'>
            <button className='btn primary-btn'>
              Contact Me
            </button>
            <button className='btn primary-btn'>
              Dowload Resume
            </button>
          </div>
        </div>
        <div className="presentation-img">
          <picture>
            <img src="https://avatars.githubusercontent.com/u/26345032?v=4" />
          </picture>
        </div>
      </div>
      <div>
        <ArrowDropDownIcon className="arrow-down" />
      </div>
    </section>
  )
}

export default SectionPresentation
