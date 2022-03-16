import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h6>05.</h6>
      <h3>Contact</h3>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://avatars.githubusercontent.com/u/26345032?v=4" />
          </div>
        </div>

        <div className="content about__content">
          <h4>
            asdasdasd kiasdj asd asodn asodn asnd asoid aijsd
            asd oaisnd oiansd oasind onasdoi nasodmn apsmd pmasdm
          </h4>
          <p>
            My name is <b>Patrik Karlsson</b>,
          </p>
          <p>
            Esse pariatur nulla cillum minim veniam quis labore ea ullamco. Veniam sunt labore minim sint nostrud laborum adipisicing fugiat sunt sunt. Ex commodo ut Lorem id nisi mollit. In veniam sunt deserunt minim labore. Culpa sint elit sit duis cillum.
          </p>

          <button className='btn primary-btn'>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
