import { useState } from "react";
import logo from "../../../assets/Netflix_Logo_RGB.png";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import profile from "../../../assets/profile-1.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiPencilDuotone } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";

import profile1 from "../../../assets/profile-2.png";
import profile2 from "../../../assets/profile-3.png";
import profile3 from "../../../assets/profile-4.png";

import "./MainNavbar.css";
const navlinks = [
  {
    text: "Ana Sayfa",
    href: "main",
  },
  {
    text: "Diziler",
    href: "series",
  },
  {
    text: "Filmler",
    href: "film",
  },
  {
    text: "Yeni ve Popüler",
    href: "latest",
  },
  {
    text: "Listem",
    href: "my-list",
  },
];
const MainNavbar = () => {
  const [isHover, setisHover] = useState(false);

  const handleIsHover = (isHover) => {
    setisHover(isHover);
  };

  const googleLogout = () => {
    localStorage.clear();
    console.log("hesabınızdan çıkış yapıldı");
  };

  return (
    <>
      <div className="top-navbar" onMouseLeave={() => handleIsHover(false)}>
        <ul className="first-nav">
          <a href="/main">
            <img className="logo-img" src={logo} alt="Logo" />
          </a>
          {navlinks.map((nav) => (
            <a className="nav-link" href="#">
              {nav.text}
            </a>
          ))}
        </ul>
        <div className="secondary-nav">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="İçerik, kişi, tür"
            />
          </div>
          <FaRegBell className="bell-icon" />
          <div
            className="profile-container"
            onMouseMove={() => handleIsHover(true)}
          >
            <img className="nav-img" src={profile} alt="loading" />
            <IoMdArrowDropdown className="profile-icon" />
          </div>
        </div>
        {isHover ? (
          <div className="container">
            <div className="profile">
              <img className="profile-image" src={profile1} alt="" />
              <p className="profile-name">Emre</p>
            </div>
            <div className="profile">
              <img className="profile-image" src={profile2} alt="" />
              <p className="profile-name">Ömer</p>
            </div>
            <div className="profile">
              <img className="profile-image" src={profile3} alt="" />
              <p className="profile-name">Pınar</p>
            </div>
            <div className="profile-management">
              <PiPencilDuotone className="profile-management-icon" />
              <p className="profile-management-text">Profile Yönetimi</p>
            </div>
            <div className="profile-management">
              <MdOutlineManageAccounts className="profile-management-icon" />
              <p className="profile-management-text">Profili Aktar</p>
            </div>
            <div className="profile-management">
              <VscAccount className="profile-management-icon" />
              <p className="profile-management-text">Hesap</p>
            </div>
            <div className="profile-management">
              <IoIosHelpCircleOutline className="profile-management-icon" />
              <p className="profile-management-text">Yardım Merkezi</p>
            </div>
            <div className="logout-link">
              <a href="/" onClick={googleLogout}>
                Netflix Oturumunu Kapat
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MainNavbar;
