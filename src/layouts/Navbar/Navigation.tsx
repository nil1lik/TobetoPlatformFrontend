import React from "react";
import { Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css"

type Props = {};
const logo = process.env.PUBLIC_URL + "/images/tobeto-logo.png"
const Navigation = (props: Props) => {
  return (
    <Navbar expand="lg" className=" justify-content-between custom-navbar" bg="light" data-bs-theme="light">
      <Image src={logo} width={170} height={35}></Image>
      <Nav className="nav-style">
        <Link to={"/"} className="navbar-tab">
          Anasayfa
        </Link>
        <Link to={"/profilim"} className="navbar-tab">
          Profilim
        </Link>
        <Link to={"/degerlendirmeler"} className="navbar-tab">
          Değerlendirmeler
        </Link>
        <Link to={"/katalog"} className="navbar-tab">
          Katalog
        </Link>
        <Link to={"/takvim"} className="navbar-tab">
          Takvim
        </Link>
        <Link to={"/istanbulkodluyor"} className="navbar-tab">
          İstanbul Kodluyor
        </Link>
      </Nav>
      <div className="btn-group header-avatar">
          <img className="dropdown-img" src="/images/pp.png"></img>
      <NavDropdown className="dropdown-toggle nav-link dropdown-text " title="Muhammed KURT" id="basic-nav-dropdown">
        <NavDropdown.Item className="dropdown-menu.show.profile" href="#action/3.1">Profil Bilgileri</NavDropdown.Item>
        <NavDropdown.Item className="dropdown-menu.show.profile" href="#action/3.2">Oturumu Kapat</NavDropdown.Item>
      </NavDropdown>
      <div className="btn-group header-avatar">
          <img className="dropdown-toggle-img" src="/public/images/navbar-dropdown-toggle.svg"></img>
      </div>
      </div>
    </Navbar>
  );
};
export default Navigation;
