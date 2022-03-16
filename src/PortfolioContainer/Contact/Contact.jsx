import React from 'react';
import "./Contact.css";
import { faMapLocation, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact">
      <h6>05.</h6>
      <h3>Contact</h3>

      <div className="container contact__container">
        <form>
          <div className="contact__me">
            <label for="heh">Message</label>
            <textarea" id="heh" name="heh"></textarea>
          </div>

          <div className="content contact__content">
            <label for="heh">Name</label>
            <input type="text" id="heh" name="heh"></input>
            <label for="heh">Email</label>
            <input type="text" id="heh" name="heh"></input>
            <label for="heh">Subject</label>
            <input type="text" id="heh" name="heh"></input>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact
