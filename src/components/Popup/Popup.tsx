import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ExamResultPopup from "./ExamResultPopup";

type Props = {
  key?: string | number;
  title?: string;
  description?: string;
  button?: boolean;
  duration?: string;
  isCompleted?: boolean;
  imageUrl?: string;
  show: boolean;
  hide: () => void;
};

const Popup = (props: Props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal size="lg" show={props.show} onHide={props.hide} centered>
        <Modal.Header closeButton>
          <Modal.Title key={props.key} style={{ fontWeight: "600" }}>
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!props.imageUrl ?
          <>
          {`${props.description}`.split("\n").map((line, index) => (
            <>
              <p key={index} className="modal-text">
                {line}
              </p>
              <p>
                <br />
              </p>
            </>
          ))}
          {props.duration && (
            <p>
              <strong>Sınav süresi : </strong>
              {props.duration}
            </p>
          )}
          {props.button &&
            (props.isCompleted == false ? (
              <button className="btnCard">
                Sınava Başla
              </button>
            ) : (
              <button className="btnCard" onClick={handleShow}>
                Raporu Görüntüle
              </button>
            ))}
          </>
          :
          <img src={props.imageUrl} style={{minHeight: "450px", minWidth: "450px", maxHeight: "450px", maxWidth: "450px", display: "block", margin: "0 auto"}}/>
        }
        </Modal.Body>
      </Modal>
      <ExamResultPopup
        correct={10}
        wrong={0}
        empty={0}
        point={100}
        duration={props.duration}
        button={true}
        buttonNo={true}
        show={show}
        hide={handleClose}
      />
    </>
  );
};

export default Popup;
