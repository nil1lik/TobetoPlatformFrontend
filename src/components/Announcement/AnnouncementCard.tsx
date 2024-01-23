import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import AnnouncementService from "../../services/announcementService";

type Props = {
  announcementType: string,
  announcementEducation: string,
  announcementTitle: string,
  annoucementDateIcon: string,
  announcementDate: string,
  announcementDescription?: string
};

const AnnouncementCard = (props: Props) => {

  return (
    <div className="col-md-4 col-12">
    <Card className="card-notify">
      <Card.Body className="announcementInfoTop">
        <span>{props.announcementType}</span>
        <span>{props.announcementEducation}</span>
      </Card.Body>
      <Card.Body className="announcementHeader">
        <span>{props.announcementTitle}</span>
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
    </div>
  );
};

export default AnnouncementCard;
