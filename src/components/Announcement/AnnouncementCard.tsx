import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  announcementType: string,
  announcementEducation: string,
  announcementHeader: string,
  annoucementDateIcon: string,
  announcementDate: string,
};

const AnnouncementCard = (props: Props) => {
  return (
    <Card className="card-notify col-md-4 col-12 my-4 mx-4">
      <Card.Body className="announcementInfoTop">
        <span>{props.announcementType}</span>
        <span>{props.announcementEducation}</span>
      </Card.Body>
      <Card.Body className="announcementHeader">
        <span>{props.announcementHeader}</span>
      </Card.Body>
      <Card.Body className="announcementInfoBottom">
        <span>
          <Image src={props.annoucementDateIcon} />
          {props.announcementDate}
        </span>
        <Link to={"/duyurular"} className="announcementReadMore">
          Devamını Oku
        </Link>
      </Card.Body>
    </Card>
  );
};

export default AnnouncementCard;
