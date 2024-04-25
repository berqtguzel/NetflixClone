import React from "react";
import "../NetflixMainPage/NetflixMainPage.css";
import { IoIosArrowForward } from "react-icons/io";

const NetflixMainPage = () => {
  return (
    <div className="netflix-main-page">
      <h1 className="page-text text ">
        Sınırsız film, dizi ve çok daha fazlası
      </h1>
      <h3 className="page-text">
        İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.
      </h3>
      <h3 className="page-text">
        İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için
        tek yapmanız gereken e-posta adresinizi girmek
      </h3>
      <div className="input-container">
        <input
          className="mail-input"
          type="text"
          placeholder="E-posta adresi"
        />
        <button className="mail-button">Başlayın </button>
        <IoIosArrowForward className="arrow-icon" />
      </div>
    </div>
  );
};

export default NetflixMainPage;
