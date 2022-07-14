import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const serviceID = "service_ID";
  const templateID = "JMOtemplate_ID";
  const userID = "user_yd0HoddbkToxCxmJDWBi6";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact" className="contact mx-auto py-4 ">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
          nemo?
        </p>
      </div>
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center"></div>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <div className="line"></div>
              {/* PHONE INPUT */}
              <div className="text-center"></div>
              <input
                id="phone"
                text="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />
              <div className="line"></div>
              {/* EMAIL INPUT */}
              <div className="text-center"></div>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
              <div className="line"></div>
              {/* Message/Subject*/}
              <div className="text-center"></div>
              <input
                id="message"
                text="text"
                className="form-control"
                placeholder="Subject"
                name="message"
              />
            </div>
            <div className="col-md-6 col-xs-12">
              {/* Description */}
              <div id="contact-link" className="text-center"></div>
              <textarea
                id="description"
                text="text"
                className="form-control"
                placeholder="Description"
                name="description"
              ></textarea>
              {/* <div className="line"></div> */}
              <button className="btn btn-success contact-btn" type="submit">
                Connect
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
