import React from "react";

const ContactForm = ({ inputs, handleSubmit, handleChange, error }) => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact_div">
          <form onSubmit={handleSubmit}>
            <div className="contact_form">
              {error && (
                <div className="flex content-center items-center">
                  <h2 className="error">{error}</h2>
                </div>
              )}
              <div className="row1">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  defaultValue={inputs.name}
                  onChange={handleChange}
                  placeholder="name"
                />
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  defaultValue={inputs.email}
                  onChange={handleChange}
                  placeholder="email"
                />
              </div>
              <div className="row2">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  defaultValue={inputs.subject}
                  onChange={handleChange}
                  placeholder="subject"
                />
              </div>
              <div className="row3">
                <textarea
                  rows="10"
                  placeholder="your message"
                  name="message"
                  defaultValue={inputs.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="button">Send Message</button>
            </div>
          </form>
          <div className="contact_address">
            <div className="row">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <div className="info">
                <p>Main Office: NO.22-23 Street Name- City,Country </p>
                <p> Customer Center: NO.130-45 Streen Name- City, Country</p>
              </div>
            </div>
            <div className="row">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <div className="info">
                <p>Main Office: NO.22-23 Street Name- City,Country </p>
                <p> Customer Center: NO.130-45 Streen Name- City, Country</p>
              </div>
            </div>

            <div className="row">
              <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
              <div className="info">
                <p>Main Office: NO.22-23 Street Name- City,Country </p>
                <p> Customer Center: NO.130-45 Streen Name- City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
