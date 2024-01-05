import React from "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuMenu,
  Image,
  Container,
} from "semantic-ui-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="fixed-bottom " style={{ backgroundColor: "#9933ff" }}>
      <Container borderless>
        <Menu
          className="menu"
          size="large"
          style={{ backgroundColor: "#9933ff" }}
          borderless
          fixed="bottom"
        >
          <Container>
            <MenuItem className="menuitem">
              <Image
                src="Images/Tebeto-logo-yatay-beyaz.png"
                size="small"
                align="left"
              />
            </MenuItem>

            <MenuMenu position="right">
              <MenuItem>
                <Button>Bize ulaşın</Button>
              </MenuItem>
            </MenuMenu>
          </Container>
        </Menu>
      </Container>
    </div>
  );
};

export default Footer;
