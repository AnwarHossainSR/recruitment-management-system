import React from "react";
import JobFeatured from "./JobFeatured";

const JobDetailsItem = () => {
  return (
    <section className="details_info">
      <div className="container">
        <div className="row">
          <div className="left">
            <h1>Job Description</h1>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi umsan ipsum velit. Nam nec tellus
              a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
              consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo. Nullam ac urna eu felis dapibus condimentum sit
              amet a augue. Sed non neque elit
            </p>
            <div className="requirements">
              <h2>What You Need for this Position</h2>
              <p>- Objective-C</p>
              <p>- iOS SDK</p>
              <p> - XCode</p>
              <p> - Cocoa</p>
              <p>- ClojureScript</p>
            </div>
            <div className="apply">
              <h2>How To Apply</h2>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris.
              </p>
              <button className="button">apply job</button>
            </div>
          </div>
          <div className="right">
            <h1>Job Location</h1>
            <div className="location-map">Map will be rendered</div>
          </div>
        </div>
        <JobFeatured />
      </div>
    </section>
  );
};

export default JobDetailsItem;
