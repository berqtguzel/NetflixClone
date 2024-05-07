import React from "react";
import logo from "../../../assets/images/Netflix_Logo_RGB.png";
import "./NetflixLogo.css";
const NetflixLogo = () => {
  return (
    <div>
      <a href="/">
        <img className="logo-img" src={logo} alt="" />
      </a>
    </div>
  );
};

export default NetflixLogo;
