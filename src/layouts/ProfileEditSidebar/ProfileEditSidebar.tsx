import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

type Props = {};

const profileEditUrl = "/profilim/profilimi-duzenle";

const ProfileEditSideBar = (props: Props) => {
  return (
    <div>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary profile-edit-nav">
          <Nav.Link bsPrefix="profile-edit-nav-btn bs">
            <Link to={profileEditUrl + "/kisisel-bilgilerim"}>
              <img src={process.env.PUBLIC_URL + "/images/user.svg"} />
              Kişisel Bilgilerim
            </Link>
          </Nav.Link>
          <Nav.Link bsPrefix="profile-edit-nav-btn">
            <Link to={profileEditUrl + "/deneyimlerim"}>
              <img src={process.env.PUBLIC_URL + "/images/business.svg"} />
              Deneyimlerim
            </Link>
          </Nav.Link>
          <Nav.Link bsPrefix="profile-edit-nav-btn">
            <Link to={profileEditUrl + "/egitimlerim"}>
              <img src={process.env.PUBLIC_URL + "/images/book.svg"} />
              Eğitim Hayatım
            </Link>
          </Nav.Link>
          <Nav.Link bsPrefix="profile-edit-nav-btn">
            <Link to={profileEditUrl + "/yetkinliklerim"}>
              <img src={process.env.PUBLIC_URL + "/images/award.svg"} />
              Yetkinliklerim
            </Link>
          </Nav.Link>
          <Nav.Link bsPrefix="profile-edit-nav-btn">
            <Link to={profileEditUrl + "/sertifikalarım"}>
              <img src={process.env.PUBLIC_URL + "/images/certificates.svg"} />
              Sertifikalarım
            </Link>
          </Nav.Link>
          <Nav.Link bsPrefix="profile-edit-nav-btn">
            <Link to={profileEditUrl + "/medya-hesaplarim"}>
              <img src={process.env.PUBLIC_URL + "/images/globe.svg"} />
              Medya Hesaplarım
            </Link>
          </Nav.Link>
          <Nav.Link bsPrefix="profile-edit-nav-btn">
            <Link to={profileEditUrl + "/yabanci-dil"}>
              <img src={process.env.PUBLIC_URL + "/images/translate.svg"} />
              Yabancı Dillerim
            </Link>
          </Nav.Link>
          <Nav.Link bsPrefix="profile-edit-nav-btn">
            <Link to={profileEditUrl + "/ayarlar"}>
              <img src={process.env.PUBLIC_URL + "/images/settings.svg"} />
              Ayarlar
            </Link>
          </Nav.Link>
        </Navbar>
      </Container>
    </div>
  );
};

export default ProfileEditSideBar;
