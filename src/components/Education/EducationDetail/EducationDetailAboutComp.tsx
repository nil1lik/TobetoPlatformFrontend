import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./educationDetailAbout.css";

type Props = {
  educationAboutData: string;
  valueHeader: string;
};

const EducationDetailAboutComp = (props: Props) => {
  return (
    <>
      <Col lg={2}>
        <strong>{props.valueHeader}</strong>
      </Col>
      <Col lg={10}>{props.educationAboutData}</Col>
    </>
  );
};

export default EducationDetailAboutComp;
