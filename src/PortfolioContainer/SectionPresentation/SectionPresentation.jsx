import React, { useState, useEffect } from "react";
import "./SectionPresentation.css";
import TypeAnimation from "react-type-animation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SectionPresentation = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuote(data[Math.round(Math.random() * Math.abs(data.length))]);
      });
  }, []);

  return (
    <section id="anchor-home" className="presentation">
      <div className="container presentation__container">
        <div className="content presentation__content">
          <span className="presentation__content-intro">Hi, my name is</span>
          <span className="presentation__content-name">Patrik Karlsson</span>

          <TypeAnimation
            cursor={true}
            className="presentation__content-carousel"
            sequence={[
              "Web Designer",
              1500,
              "Front End Developer",
              1500,
              "Open For Work",
              1500,
            ]}
            wrapper="h2"
            repeat={Infinity}
          />

          <div className="profile-details-role">
            <span className="primary-text">
              <span className="profile-role-tagline">
                <span className="quote">{quote.text}</span> - {quote.author}
              </span>
            </span>
          </div>

          <div className="profile-options">
            <a href="#anchor-contact">
              <button className="btn primary-btn">Contact Me</button>
            </a>
            <button className="btn primary-btn">Dowload Resume</button>
          </div>
        </div>

        <div className="presentation__me shape-outer sign-left">
          <div className="presentation__me-image shape-inner sign-left">
            <picture>
              <img
                className="presentation__image"
                src="https://avatars.githubusercontent.com/u/26345032?v=4"
              />
            </picture>
          </div>
        </div>
      </div>
      <div>
        <ArrowDropDownIcon className="arrow-down" />
      </div>
    </section>
  );
};

export default SectionPresentation;
