import React from "react";
import "../../pages/Evaluation/evaluation.css";

type Props = {
  title: string;
  description: string;
  description2?: string;
  info?: string;
  italic?: string;
};

const EvolationInformation = (props: Props) => {
  return (
    <div className="col-12 col-md-5 mb-8">
      <div className="dashboard-card4 equal-box">
        <label>{props.title}</label>
        <p>
          <b>
            <i>{props.italic}</i>
          </b>
          {props.description}
        </p>
        <br />
        <p>{props.description2}</p>
        <small className="text-white">{props.info}</small>
      </div>
    </div>
  );
};

export default EvolationInformation;
