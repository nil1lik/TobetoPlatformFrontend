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
          <Nav.Link
            bsPrefix="profile-edit-nav-btn bs"
            href={profileEditUrl + "/kisisel-bilgilerim"}
          >
            <i className="bi bi-person"></i>
            Kişisel Bilgilerim
          </Nav.Link>
          <Nav.Link
            bsPrefix="profile-edit-nav-btn"
            href={profileEditUrl + "/deneyimlerim"}
          >
            <img src={process.env.PUBLIC_URL + "/images/business.svg"} />
            Deneyimlerim
          </Nav.Link>
          <Nav.Link
            bsPrefix="profile-edit-nav-btn"
            href={profileEditUrl + "/egitimlerim"}
          >
            <img src={process.env.PUBLIC_URL + "/images/book.svg"} />
            Eğitim Hayatım
          </Nav.Link>
          <Nav.Link
            bsPrefix="profile-edit-nav-btn"
            href={profileEditUrl + "/yetkinliklerim"}
          >
            <img src={process.env.PUBLIC_URL + "/images/award.svg"} />
            Yetkinliklerim
          </Nav.Link>
          <Nav.Link
            bsPrefix="profile-edit-nav-btn"
            href={profileEditUrl + "/sertifikalarım"}
          >
            <img src={process.env.PUBLIC_URL + "/images/certificates.svg"} />
            Sertifikalarım
          </Nav.Link>
          <Nav.Link
            bsPrefix="profile-edit-nav-btn"
            href={profileEditUrl + "/medya-hesaplarim"}
          >
            <img src={process.env.PUBLIC_URL + "/images/globe.svg"} />
            Medya Hesaplarım
          </Nav.Link>
          <Nav.Link
            bsPrefix="profile-edit-nav-btn"
            href={profileEditUrl + "/yabanci-dil"}
          >
            <img src={process.env.PUBLIC_URL + "/images/translate.svg"} />
            Yabancı Dillerim
          </Nav.Link>
          <Nav.Link
            bsPrefix="profile-edit-nav-btn"
            href={profileEditUrl + "/ayarlar"}
          >
            <img src={process.env.PUBLIC_URL + "/images/settings.svg"} />
            Ayarlar
          </Nav.Link>
        </Navbar>
      </Container>
    </div>
  );
};

export default ProfileEditSideBar;