import React, { useEffect } from "react";
import "../NetflixLoginInput/NetflixLoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const clientID =
  "1017272210067-onec062c9o8dqd7o0e5jog6c3ugcf19r.apps.googleusercontent.com";
const NetflixLoginInput = () => {
  const navigate = useNavigate();

  const firebaseConfig = {
    apiKey: "AIzaSyCUHkwL3VO4Dbr76u1tdt-zHhxre-Tb4lQ",
    authDomain: "netflix-clone-50eb5.firebaseapp.com",
    projectId: "netflix-clone-50eb5",
    storageBucket: "netflix-clone-50eb5.appspot.com",
    messagingSenderId: "1092069968328",
    appId: "1:1092069968328:web:516bf145c651c08b9798fd",
    measurementId: "G-56NRJJ19EG",
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // Oturum açma başarılı
        const user = result.user;
        console.log("Google hesabıyla giriş yapıldı:", user);
      })
      .catch((error) => {
        // Hata oluştu
        console.error("Google hesabıyla giriş yaparken hata oluştu:", error);
      });
  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        // Oturum kapatma başarılı
        console.log("Oturum kapatıldı");
      })
      .catch((error) => {
        // Hata oluştu
        console.error("Oturum kapatılırken hata oluştu:", error);
      });
  };

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
