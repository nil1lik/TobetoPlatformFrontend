import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";

type Props = {};

const ProfileEditSideBar = (props: Props) => {
  return (
    <div>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary profile-edit-nav">
            <Nav.Link bsPrefix="profile-edit-nav-btn bs" href="#pricing">
              <img src={process.env.PUBLIC_URL + "/images/user.svg"} />
              Kişisel Bilgilerim
            </Nav.Link>
            <Nav.Link bsPrefix="profile-edit-nav-btn" href="#pricing">
              <img src={process.env.PUBLIC_URL + "/images/business.svg"} />
              Deneyimlerim
            </Nav.Link>
            <Nav.Link bsPrefix="profile-edit-nav-btn" href="#pricing">
              <img src={process.env.PUBLIC_URL + "/images/book.svg"} />
              Eğitim Hayatım
            </Nav.Link>
            <Nav.Link bsPrefix="profile-edit-nav-btn" href="#pricing">
              <img src={process.env.PUBLIC_URL + "/images/award.svg"} />
              Yetkinliklerim
            </Nav.Link>
            <Nav.Link bsPrefix="profile-edit-nav-btn" href="#pricing">
              <img src={process.env.PUBLIC_URL + "/images/certificates.svg"} />
              Sertifikalarım
            </Nav.Link>
            <Nav.Link bsPrefix="profile-edit-nav-btn" href="#pricing">
              <img src={process.env.PUBLIC_URL + "/images/globe.svg"} />
              Medya Hesaplarım
            </Nav.Link>
            <Nav.Link bsPrefix="profile-edit-nav-btn" href="#pricing">
              <img src={process.env.PUBLIC_URL + "/images/translate.svg"} />
              Yabancı Dillerim
            </Nav.Link>
            <Nav.Link bsPrefix="profile-edit-nav-btn" href="#pricing">
              <img src={process.env.PUBLIC_URL + "/images/settings.svg"} />
              Ayarlar
            </Nav.Link>
        </Navbar>
      </Container>
    </div>
  );
};

export default ProfileEditSideBar;
