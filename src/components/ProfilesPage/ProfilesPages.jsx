import React from "react";
import "./ProfilesPages.css";
import { Link, useNavigate } from "react-router-dom";

const ProfilsPage = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
    console.log("ana sayfaya git");
  };

  const data = [
    { imgSrc: "profile-1", name: "Berat", id: "1" },
    { imgSrc: "profile-2", name: "Emre", id: "2" },
    { imgSrc: "profile-3", name: "Ömer", id: "3" },
    { imgSrc: "profile-4", name: "Pınar", id: "4" },
  ];
  return (
    <>
      <div className="profiles-page">
        <h1 className="whos-watching">Kim İzliyor ?</h1>
        <div className="profiles">
          {data.map((obj) => (
            <div className="profile" key={obj.id}>
              <img
                onClick={goToMain}
                className="profile-img"
                src={require(`../../assets/${obj.imgSrc}.png`)}
                alt=""
              />
              <h3 className="profile-name">{obj.name}</h3>
            </div>
          ))}
        </div>
        <Link className="profile-button">Profil Yönetimi</Link>
      </div>
    </>
  );
};

export default ProfilsPage;
