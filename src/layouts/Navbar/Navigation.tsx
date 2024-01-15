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
      {/* <div className="btn-group header-avatar">
          <img className="dropdown-img" src="/images/pp.png"></img>
      <NavDropdown className="dropdown-toggle nav-link dropdown-text " title="Muhammed KURT" id="basic-nav-dropdown">
        <NavDropdown.Item className="dropdown-menu.show.profile" href="#action/3.1">Profil Bilgileri</NavDropdown.Item>
        <NavDropdown.Item className="dropdown-menu.show.profile" href="#action/3.2">Oturumu Kapat</NavDropdown.Item>
      </NavDropdown>
      <div className="btn-group header-avatar">
          <img className="dropdown-toggle-img" src="/public/images/navbar-dropdown-toggle.svg"></img>
      </div>
      </div> */}

      <div className="d-none d-xxl-block">
        <div className="d-flex justify-space-between align-items-center">
          <div className="mx-3 gap-1em align-items-center d-flex">
            <span className="tbt-gradient"></span>
          </div>
          <div className="btn-group header-avatar">
            <button type="button" className="btn p-0 fw-normal b-r-35 text-end d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="true">
            <div className="me-2">
              <span className="dropdown-pp">
                <span className="dropdown-pp-2"> 
                  <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2736%27%20height=%2736%27/%3e" className="dropdown-pp-img"></img>
                </span>
                <img alt="" src="/images/tobetouserlogo.png" decoding="async" data-nimg="intrinsic" className="dropdown-pp-img-2 cv-pp-img"></img>
              </span>
             </div>
            <div className="me-3">
              <p className="mb-0 name">
                Nil Firdevs Birlik  
              </p> 
            </div>
            <span>
              <svg xmlns="/images/navbar-dropdown-toggle.svg" width={20} height={20} viewBox="5 3 20 20" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
            </button>
            <ul className="profile dropdown-menu" data-bs-toggle="static">
              <li>
                <a className="dropdown-item profil-dropdown" href="#">Profil Bilgileri</a> 
              </li>
              <li>
                <hr className="dropdown-divider" ></hr>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item profil-dropdown" href="#">Oturumu Kapat</a> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
export default Navigation;
