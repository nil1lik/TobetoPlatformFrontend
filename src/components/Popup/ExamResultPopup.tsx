import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import "../Popup/popup.css";

type Props = {
  correct: number;
  wrong: number;
  empty: number;
  point: number;
  button?: boolean;
  duration?: string;
  show: boolean;
  buttonNo?: boolean;
  hide: () => void;
};

const ExamResultPopup = (props: Props) => {
  const handleNoButtonClick = () => {
    props.hide();
  };
  return (
    <Modal size="xl" show={props.show} onHide={props.hide} centered>
      <Modal.Body>
        <div className="result-screen">
          <span className="result-title">Test Bitti</span>
          <Row className="result-items">
            <Col>
              <span>
                {props.correct}
                <a>Doğru</a>
              </span>
            </Col>
            <Col>
              <span>
                {props.wrong}
                <a>Yanlış</a>
              </span>
            </Col>
            <Col>
              <span>
                {props.empty}
                <a>Boş</a>
              </span>
            </Col>
            <Col>
              <span>
                {props.point}
                <a>Puan</a>
              </span>
            </Col>
          </Row>
          <Row>
            {props.buttonNo && (
              <button onClick={handleNoButtonClick} className="btnCard">
                Kapat
              </button>
            )}
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ExamResultPopup;
