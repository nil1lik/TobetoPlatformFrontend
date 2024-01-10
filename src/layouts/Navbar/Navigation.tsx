import { Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {};
const logo = process.env.PUBLIC_URL + "/images/tobeto-logo.png"
const Navigation = (props: Props) => {
  return (
    <Navbar expand="lg" className=" justify-content-between custom-navbar" bg="light" data-bs-theme="light">
      <Image src={logo} width={170} height={35}></Image>
      <Nav className="nav-style">
        <Link to={"/"}>
          <Nav.Link href="#anasayfa">Anasayfa</Nav.Link>
        </Link>
        <Link to={"/profilim"}>
          <Nav.Link href="#profilim">Profilim</Nav.Link>
        </Link>
        <Link to={"/degerlendirmeler"}>
          <Nav.Link href="#degerlendirmeler">Değerlendirmeler</Nav.Link>
        </Link>
        <Link to={"/katalog"}>
          <Nav.Link href="#katalog">Katalog</Nav.Link>
        </Link>
        <Link to={"/takvim"}>
          <Nav.Link href="#takvim">Takvim</Nav.Link>
        </Link>
        <Link to={"/istanbulkodluyor"}>
          <Nav.Link href="#istanbul-kodluyor">İstanbul Kodluyor</Nav.Link>
        </Link>
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
