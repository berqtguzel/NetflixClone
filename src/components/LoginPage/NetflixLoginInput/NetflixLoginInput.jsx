import React, { useEffect, useState } from "react";
import "../NetflixLoginInput/NetflixLoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "./config.js";
import { signInWithPopup } from "firebase/auth";

const NetflixLoginInput = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/profile");
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div className="login-page-container">
      <div className="login-input-div">
        <h3 className="login-text">Oturum Aç</h3>
        <input
          type="email"
          id="email"
          className="login-input"
          placeholder="E-posta veya cep telefonu numarası"
        />
        <input
          className="login-input"
          type="password"
          id="password"
          placeholder="Parola"
        />
        <button className="google-sign" onClick={handleClick}>
          Google ile Giriş Yap
        </button>

        <Link className="login-page-button" href="#">
          Oturum Aç
        </Link>
        <p className="option">VEYA</p>
        <Link href="#" className="login-code">
          Oturum Açma Kodu Kullan
        </Link>
        <Link href="#" className="forgot-password">
          Parolayı mı unuttunuz?
        </Link>
        <div className="remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me" className="remember-me">
            Beni Hatırla
          </label>
        </div>
        <p className="join-netflix">
          Netflix'e katılmak ister misiniz?{" "}
          <a className="signup-link" href="/">
            Şimdi kaydolun.
          </a>
        </p>
      </div>
    </div>
  );
};

export default NetflixLoginInput;
