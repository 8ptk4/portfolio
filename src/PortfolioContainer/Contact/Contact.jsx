import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const send = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="anchor-contact">
      <h6>05.</h6>
      <h3>Contact</h3>
      <form onSubmit={send}>
        <div className="container contact__container">
          <div className="content contact__content">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />
            <button className="mainBtn btn">Send</button>
          </div>

          <div className="contact__me contact__content">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            />
            <button type="submit" className="secondaryBtn btn">
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
