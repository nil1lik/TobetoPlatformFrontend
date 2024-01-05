import React from "react";
import { MenuItem, Menu, MenuMenu, Button, Image, Container } from "semantic-ui-react";

const Navbar = () => {
  const containerStyle = {
    textAlign: 'center',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  };

  return (
    <Menu className="menu" size="large" borderless>
      <MenuItem className="menuitem">
        <Image src="Images/tobeto-logo.png" size="small" />
      </MenuItem>

      <Container style={containerStyle}>
        <MenuItem name="Anasayfa" style={{ fontWeight: "bold" }} />
        <MenuItem name="Profilim" style={{ fontWeight: "bold" }} />
        <MenuItem name="Değerlendirmeler" style={{ fontWeight: "bold" }} />
        <MenuItem name="Katalog" style={{ fontWeight: "bold" }} />
        <MenuItem name="Takvim" style={{ fontWeight: "bold" }} />
        <MenuItem name="İstanbul Kodluyor" style={{ fontWeight: "bold" }} />
      </Container>

      <MenuMenu>
        <MenuItem>
          <Button primary>Giriş Yap</Button>
        </MenuItem>
      </MenuMenu>
    </Menu>
  );
};

export default Navbar;
