import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Popup from "../Popup/Popup";

type Props = {
  id: number;
  name: string;
  description: string;
  duration: string;
};

const ExamCard = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="card-transition" onClick={handleShow}>
        <Card.Body key={props.id} className="exam-card card-title h5">
          <Card.Title>{props.name}</Card.Title>
          <Card.Img
            className="status-done"
            src={process.env.PUBLIC_URL + "/images/status-done.svg"}
          />
          <Card.Subtitle className="mb-2 text-muted">
            {props.description}
          </Card.Subtitle>
          <div className="exam-icon-text">
            <Card.Img
              className="exam-time"
              src={process.env.PUBLIC_URL + "/images/examTime.svg"}
            />
            <Card.Text className="exam-time-text">{props.duration}</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Popup
        key={props.id}
        title={props.name}
        description={props.description}
        duration={props.duration}
        button={true}
        show={show}
        hide={handleClose}
      />
    </>
  );
};

export default ExamCard;
