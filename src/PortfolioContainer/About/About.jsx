import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="anchor-about">
      <h6>02.</h6>
      <h3>About Me</h3>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src="https://avatars.githubusercontent.com/u/26345032?v=4" />
          </div>
        </div> */}
        <div className="about__me shape-outer sign-right">
          <div className="about__me-image shape-inner sign-right">
            <picture>
              <img
                className="about__image"
                src="https://avatars.githubusercontent.com/u/26345032?v=4"
              />
            </picture>
          </div>
        </div>

        <div className="content about__content">
          <h4 className="text__primary">
            asdasdasd kiasdj asd asodn asodn asnd asoid aijsd asd oaisnd oiansd
            oasind onasdoi nasodmn apsmd pmasdm
          </h4>
          <p className="text__secondary">
            inim veniam quis labore ea ullamco. Veniam sunt labore minim sint
            nostrud laborum adipisicing fugiat sunt sunt. Ex commodo ut Lorem id
            nisi mol
          </p>
          <p className="text__main">
            Esse pariatur nulla cillum minim veniam quis labore ea ullamco.
            Veniam sunt labore minim sint nostrud laborum adipisicing fugiat
            sunt sunt. Ex commodo ut Lorem id nisi mollit. In veniam sunt
            deserunt minim labore. Culpa sint elit sit duis cillum.
          </p>

          <button className="btn primary-btn">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
