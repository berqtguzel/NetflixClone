import React from "react";
import "../NetflixNavbar/NetflixNavbar.css";
import logo from "../../assets/Netflix_Logo_RGB.png";
import { IoLanguage } from "react-icons/io5";
const NetflixNavbar = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <img className="logo-img" src={logo} alt="" />
        </div>
        <div className="navbar-right">
          <div className="language-container">
            <IoLanguage className="language-icon" />
            <select className="language-select" name="language" id="">
              <option value="">Türkçe</option>
              <option value="">English</option>
            </select>
          </div>
          <button className="login-button">Oturum Aç</button>
        </div>
      </div>
    </div>
  );
};

export default NetflixNavbar;
