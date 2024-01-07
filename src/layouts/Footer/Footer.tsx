import React from "react";
import { Button, Container, Image, Menu } from "semantic-ui-react";

type Props = {};
const logoSrc = process.env.PUBLIC_URL + "/images/Tebeto-logo-yatay-beyaz.png";

const Footer = (props: Props) => {
  return (
    <Menu pointing secondary size="huge" style={{ backgroundColor: "#9b33ff" }}>
      <Container>
        <Menu.Item>
          <Image src={logoSrc} size="small" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button style={{ backgroundColor:"#ffffff", color:"#000000", borderRadius:"20px", fontSize:"14px", fontWeight:"800"}}>Bize Ulaşın</Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Footer;
