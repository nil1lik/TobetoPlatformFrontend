import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./educationDetailAbout.css";

type Props = {
  educationAboutData: string;
  className: string;
  image: string;
  valueHeader: string;
};

const EducationDetailAboutComp = (props: Props) => {
  return (
    <>
      <Col lg={2}>
        <img className={props.className} src={props.image} />
        <strong>{props.valueHeader}</strong>
      </Col>
      <Col lg={10}>{props.educationAboutData}</Col>
    </>
  );
};

export default EducationDetailAboutComp;
