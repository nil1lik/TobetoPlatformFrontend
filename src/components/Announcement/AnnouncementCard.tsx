import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnnouncementService from "../../services/announcementService";
import { Card, Image, Modal } from "react-bootstrap";

type Props = {
  announcementType: string,
  announcementName: string,
  announcementTitle: string,
  annoucementDateIcon: string,
  announcementDate: string,
  announcementDescription: string
};

const AnnouncementCard = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formattedDate = props.announcementDate.split('T')[0];
  const [year, month, day] = formattedDate.split('-');

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
            <Image src={props.annoucementDateIcon} className="dateIcon"/>
            {/* {`${day}-${month}-${year}`} */}
            {props.announcementDate}
          </span>
          <span className="announcementReadMore" onClick={handleShow}>
            Devamını Oku
          </span>
        </Card.Body>
      </Card>
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "600" }}>{props.announcementTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`${props.announcementDescription}`.split('\n').map((line, index) => (
            <>
              <p key={index} className="modal-text">{line}</p><p><br /></p>
            </>
          ))
          }
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AnnouncementCard;
