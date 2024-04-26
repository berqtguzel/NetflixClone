import React from "react";
import "./NetflixNavbar.css";
import { IoLanguage } from "react-icons/io5";
import NetflixLogo from "../NetflixLogo/NetflixLogo";
const NetflixNavbar = () => {
  return (
    <div className="header">
      <div className="navbar">
        <NetflixLogo />
        <div className="navbar-right">
          <div className="language-container">
            <IoLanguage className="language-icon" />
            <select className="language-select" name="language" id="">
              <option value="">Türkçe</option>
              <option value="">English</option>
            </select>
          </div>
          <a href="/Login" className="login-button">
            Oturum Aç
          </a>
        </div>
      </div>
    </div>
  );
};

export default NetflixNavbar;
