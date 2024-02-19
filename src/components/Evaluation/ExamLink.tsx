import React, { useState } from "react";
import "../../pages/Evaluation/evaluation.css";
import { startButtonText } from "../../utilities/Constants/constantValues";
import Popup from "../Popup/Popup";

type Props = {
  id: number;
  name: string;
  description: string;
  duration: string;
  title: string;
};

const ExamLink = (props: Props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="dashboard-card-slim">
      <div className="d-flex align-items-center">
        <div className="platformIcon"></div>
        <label>{props.title}</label>
      </div>
      <button className="btn" onClick={handleShow}>{startButtonText}</button>
      <Popup
        key={props.id}
        title={props.name}
        description={props.description}
        duration={props.duration}
        button={true}
        show={show}
        hide={handleClose}
      />
    </div>
  );
};

export default ExamLink;
