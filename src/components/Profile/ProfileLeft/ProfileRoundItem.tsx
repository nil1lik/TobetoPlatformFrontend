import React, { ReactNode, useState } from "react";
import { Card } from "react-bootstrap";
import Popup from "../../Popup/Popup";

type Props = {
  imageUrl?: string;
  title?: string;
  className: string;
  children: ReactNode;
};

const ProfileRoundItem = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Card.Body className={props.className} onClick={handleShow}>
        {props.children}
      </Card.Body>
      <Popup
        imageUrl={props.imageUrl}
        title={props.title}
        show={show}
        hide={handleClose}
      />
    </>
  );
};

export default ProfileRoundItem;
