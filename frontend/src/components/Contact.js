import React from 'react';


function Contact() {
  return (
    <div id="contact" className="contact mx-auto py-4">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
          nemo?
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* NAME INPUT */}
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
            <div className="line"></div>
            {/* PHONE INPUT */}
            <input
              id="phone"
              text="text"
              className="form-control"
              placeholder="Phone Number"
              phone="phone"
            />
            {/* EMAIL INPUT */}
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              email="email"
            />
            <div className="line"></div>
            {/* Message/Subject*/}
            <input
              id="subject"
              text="text"
              className="form-control"
              placeholder="Subject"
              subject="subject"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            {/* Description */}
            <textarea
              id="description"
              text="text"
              className="form-control"
              placeholder="Description"
              Description="Description"
            ></textarea>
            <div className="line"></div>
            <button className="btn btn-success contact-btn" type="submit">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact