import { Image, NavDropdown, Navbar, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <Navbar expand="lg" className=" justify-content-between custom-navbar" bg="light" data-bs-theme="light">
        <Image src="./images/tobeto-logo.png" width={170} height={35}></Image>
          <Nav className="nav-style">
            <Link to={"/"}><Nav.Link href="#anasayfa">Anasayfa</Nav.Link></Link>
            <Nav.Link href="#profilim">Profilim</Nav.Link>
            <Nav.Link href="#degerlendirmeler">Değerlendirmeler</Nav.Link>
            <Nav.Link href="#katalog">Katalog</Nav.Link>
            <Nav.Link href="#takvim">Takvim</Nav.Link>
            <Nav.Link href="https://tobeto.com/istanbul-kodluyor">İstanbul Kodluyor</Nav.Link>
          </Nav>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
    </Navbar>
  );
};
export default Navigation;
