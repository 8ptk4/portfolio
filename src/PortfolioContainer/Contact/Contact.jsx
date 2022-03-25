import React from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import { faMapLocation, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  function send(e) {
    e.preventDefault();

    emailjs.sendForm('service_77tqm1l', 'template_2qzqkmq', e.target, 'Fv0AEgPoFcYgr2esW')
      .then((res) => {
        console.log(res.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <section id="anchor-contact">
      <h6>05.</h6>
      <h3>Contact</h3>

        <form onSubmit={send}>
          <div className="container contact__container">
            <div className="content contact__content">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required></input>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required></input>
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required></input>
              <button className="mainBtn btn">Send</button>
            </div>

            <div className="contact__me contact__content">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Write something.." required></textarea>
              <button type="submit" className="secondaryBtn btn">Send</button>
            </div>
          </div>
        </form>
    </section>
  )
}

export default Contact
