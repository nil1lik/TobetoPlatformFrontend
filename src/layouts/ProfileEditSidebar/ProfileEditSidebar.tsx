import React from "react";
import { Link } from "react-router-dom";
import "./profileEditSidebar.css"


type Props = {};

const profileEditUrl = "/profilim/profilimi-duzenle";

const ProfileEditSideBar = (props: Props) => {
  return (
          <Link
            className="profile-edit-nav-btn profile-sidebar-text"
            to={profileEditUrl + "/kisisel-bilgilerim"}
          >
            <i className="bi bi-person"></i>
            Kişisel Bilgilerim
          </Link>
          // <Link
          //   className="profile-edit-nav-btn"
          //   to={profileEditUrl + "/deneyimlerim"}
          // >
          //   <img src={process.env.PUBLIC_URL + "/images/business.svg"} />
          //   Deneyimlerim
          // </Link>
          // <Link
          //   className="profile-edit-nav-btn"
          //   to={profileEditUrl + "/egitimlerim"}
          // >
          //   <img src={process.env.PUBLIC_URL + "/images/book.svg"} />
          //   Eğitim Hayatım
          // </Link>
          // <Link
          //   className="profile-edit-nav-btn"
          //   to={profileEditUrl + "/yetkinliklerim"}
          // >
          //   <img src={process.env.PUBLIC_URL + "/images/award.svg"} />
          //   Yetkinliklerim
          // </Link>
          // <Link
          //   className="profile-edit-nav-btn"
          //   to={profileEditUrl + "/sertifikalarım"}
          // >
          //   <img src={process.env.PUBLIC_URL + "/images/certificates.svg"} />
          //   Sertifikalarım
          // </Link>
          // <Link
          //   className="profile-edit-nav-btn"
          //   to={profileEditUrl + "/medya-hesaplarim"}
          // >
          //   <img src={process.env.PUBLIC_URL + "/images/globe.svg"} />
          //   Medya Hesaplarım
          // </Link>
          // <Link
          //   className="profile-edit-nav-btn"
          //   to={profileEditUrl + "/yabanci-dil"}
          // >
          //   <img src={process.env.PUBLIC_URL + "/images/translate.svg"} />
          //   Yabancı Dillerim
          // </Link>
          // <Link
          //   className="profile-edit-nav-btn"
          //   to={profileEditUrl + "/ayarlar"}
          // >
          //   <img src={process.env.PUBLIC_URL + "/images/settings.svg"} />
          //   Ayarlar
          // </Link>
  );
};

export default ProfileEditSideBar;