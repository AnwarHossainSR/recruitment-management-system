import React from "react";
import Logo from "../images/logo.svg";

const Info = () => {
  return (
    <div className="info">
      <img src={Logo} alt="logo" />
      <p>
        Sed consequat sapien faus quam bibendum convallis quis in nulla.
        Pellentesque volutpat odio eget diam cursus semper.
      </p>
    </div>
  );
};

export default Info;
