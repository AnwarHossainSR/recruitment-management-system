import React from "react";

const ContactForm = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact_div">
          <div className="contact_form">
            <div className="row1">
              <input type="text" className="form-control" placeholder="name" />
              <input type="text" className="form-control" placeholder="email" />
            </div>
            <div className="row2">
              <input
                type="text"
                className="form-control"
                placeholder="subject"
              />
            </div>
            <div className="row3">
              <textarea rows="10" placeholder="your message"></textarea>
            </div>
            <button className="button">Send Message</button>
          </div>
          <div className="contact_address">
            <div className="row">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <div className="info">
                <p>Main Office: NO.22-23 Street Name- City,Country </p>
                <p> Customer Center: NO.130-45 Streen Name- City, Country</p>
              </div>
            </div>
            <div className="row">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <div className="info">
              <p>Main Office: NO.22-23 Street Name- City,Country </p>
                <p> Customer Center: NO.130-45 Streen Name- City, Country</p>
              </div>
            </div>

            <div className="row">
              <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
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
