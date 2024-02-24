import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
import Popup from "../Popup/Popup";
import { readMoreText } from "../../utilities/Constants/constantValues";

type Props = {
  announcementType: string;
  announcementName: string;
  announcementTitle: string;
  annoucementDateIcon?: string;
  announcementDate: Date;
  announcementDescription: string;
};

const AnnouncementCard = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className="col-md-4 col-12">
        <Card className="card-notify">
          <div className="announcementTopCont">
            <Card.Body className="announcementInfoTop">
              <span>{props.announcementType}</span>
              <span>{props.announcementName}</span>
            </Card.Body>
            <Card.Body className="announcementHeader">
              <span>{props.announcementTitle}</span>
            </Card.Body>
          </div>
          <Card.Body className="announcementInfoBottom">
            <span>
              <Image
                src={props.annoucementDateIcon?.toString()}
                className="dateIcon"
              />
              {new Date(props.announcementDate).toLocaleDateString("tr-TR")}
            </span>
            <span className="announcementReadMore" onClick={handleShow}>
              {readMoreText}
            </span>
          </Card.Body>
        </Card> 
      </div> 
      <Popup
        key={props.announcementName}
        title={props.announcementTitle}
        description={props.announcementDescription}
        show={show}
        hide={handleClose}
      />
    </>
  );
};

export default AnnouncementCard;
