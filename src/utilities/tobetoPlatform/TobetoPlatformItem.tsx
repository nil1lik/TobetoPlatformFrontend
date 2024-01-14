import React, { ReactNode } from "react";
import { Card } from "react-bootstrap";


type Props = {
  imageSrc?: string,
  imageClass: string,
};

  const TobetoPlatformItem = (props: Props) => {
  const logoSrc = process.env.PUBLIC_URL + `/images/${props.imageSrc}`;

  return (
    <div>
       <Card className="platform-item-cont">
        <Card.Img className={props.imageClass} src={logoSrc}/>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TobetoPlatformItem;
