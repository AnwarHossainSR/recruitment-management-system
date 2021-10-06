import React from "react";
import { Link } from "react-router-dom";

const Condition = () => {
  return (
    <div className="quick_links">
      <h1>Conditions</h1>
      <div className="links">
        <Link to="#">Tearm & Conditions</Link>
        <Link to="/privacy">Privacy</Link>
      </div>
    </div>
  );
};

export default Condition;
