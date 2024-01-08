import React from "react";
import { Button, Container, Image, Menu } from "semantic-ui-react";

type Props = {};
const logoSrc = process.env.PUBLIC_URL + "/images/logo-yatay-beyaz.png";

const divStyle = {
  height: '100px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
};

const Footer = (props: Props) => {
  return (
    <Menu pointing secondary size="huge" style={{ ...divStyle, backgroundColor: "#9b33ff" }}>
      <Container>
        <Menu.Item>
          <Image src={logoSrc} size="tiny" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button className="button">Bize Ulaşın</Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Footer;
