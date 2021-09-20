import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="quick_links">
      <h1>Quick Links</h1>
      <div className="links">
        <Link to="/">About</Link>
        <Link to="/">Support</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
};

export default Links;
