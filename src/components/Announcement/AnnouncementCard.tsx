import React, { useState } from "react";
import { Card, Image, Modal } from "react-bootstrap";
import Popup from "../Popup/Popup";

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
            Devamını Oku
          </span>
        </Card.Body>
      </Card>

      <Popup title={props.announcementTitle} description={props.announcementDescription} show={show} hide={handleClose}/>









      {/* <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "600" }}>
            {props.announcementTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`${props.announcementDescription}`.split("\n").map((line, index) => (
            <>
              <p key={index} className="modal-text">
                {line}
              </p>
              <p>
                <br />
              </p>
            </>
          ))}
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

export default AnnouncementCard;
