import React from "react";
import { Col } from "react-bootstrap";
import "./educationDetailAbout.css";

type Props = {
  educationData?: string | React.ReactNode;
  className: string;
  image: string;
  valueHeader: string;
  colSize? : number;
  dataClassName?: string;
};

const EducationDetailAboutComp = (props: Props) => {
  const remainingColSize = 12 - (props.colSize || 12);
  return (
    <>
      <Col lg={props.colSize}>
        <img className={props.className} src={props.image} />
        <strong>{props.valueHeader}</strong>
      </Col>
      <Col className={props.dataClassName} lg={remainingColSize}>{props.educationData}</Col>
    </>
  );
};

export default EducationDetailAboutComp;
