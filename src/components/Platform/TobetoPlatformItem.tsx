import React from "react";
import { Card } from "react-bootstrap";
import '../../pages/Platform/platform.css'


type Props = {
  imageSrc?: string,
  imageClass?: string,
  text: string,
  title?: string
};

const TobetoPlatformItem = (props: Props) => {
  const logoSrc = process.env.PUBLIC_URL + `/images/${props.imageSrc}`;

  return (
    <div className="tobeto-platform-border">
      <Card className="platform-item-cont ">
        {
          props.imageSrc && props.imageClass
            ? <Card.Img className={props.imageClass} src={logoSrc} />
            : null
        }
        <Card.Body>
          <Card.Text className="tobeto-slogan">
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TobetoPlatformItem;
