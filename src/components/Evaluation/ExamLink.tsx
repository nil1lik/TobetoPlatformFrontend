import React from "react";
import "../../pages/Evaluation/evaluation.css";
import { startButtonText } from "../../utilities/Constants/constantValues";

type Props = {
    title:string,
};

const ExamLink = (props: Props) => {
  return (
    <div className="dashboard-card-slim">
      <div className="d-flex align-items-center" >
        <div className="platformIcon"></div>
        <label>{props.title}</label>
      </div>
      <button className="btn">{startButtonText}</button>
    </div>
  );
};

export default ExamLink;
