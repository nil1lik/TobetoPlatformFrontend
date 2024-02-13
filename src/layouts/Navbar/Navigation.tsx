import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import DropdownItem from "./DropdownItem";
import Container from "react-bootstrap/Container";

type Props = {};
const logo = process.env.PUBLIC_URL + "/images/tobeto-logo.png";
const Navigation = (props: Props) => {
  return (
    <Navbar expand="xxl" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/"}>
            <Image src={logo} width={170} height={35}></Image>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0 ml-auto"
            style={{ maxHeight: "300px" }}
          >
            <ul className="d-xxl-flex navbar-nav">
              <li >
                <Nav.Item>
                  <Link to={"/"} className="navbar-tab">
                    Anasayfa
                  </Link>
                </Nav.Item>
              </li>
              <li >
                <Nav.Item >
                  <Link to={"/profilim"} className="navbar-tab">
                    Profilim
                  </Link>
                </Nav.Item>
              </li>
              <li >
                <Nav.Item>
                  <Link to={"/degerlendirmeler"} className="navbar-tab">
                    Değerlendirmeler
                  </Link>
                </Nav.Item>
              </li>
              <li >
                <Nav.Item>
                  <Link to={"/katalog"} className="navbar-tab">
                    Katalog
                  </Link>
                </Nav.Item>
              </li>
              <li >
                <Nav.Item>
                  <Link to={"/takvim"} className="navbar-tab">
                    Takvim
                  </Link>
                </Nav.Item>
              </li>
              <li >
                <Nav.Item>
                  <Link to={"https://tobeto.com/istanbul-kodluyor"} className="navbar-tab">
                    İstanbul Kodluyor
                  </Link>
                </Nav.Item>
              </li>
            </ul>
          </Nav>
          <Nav
            style={{ maxHeight: "100px"}}>
            <DropdownItem/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
