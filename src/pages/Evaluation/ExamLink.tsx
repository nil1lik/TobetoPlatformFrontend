import React from "react";
import "../../pages/Evaluation/evaluation.css";

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
      <button className="btn">Başla</button>
    </div>
  );
};

export default ExamLink;
