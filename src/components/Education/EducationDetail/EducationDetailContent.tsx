import React, { useState } from "react";
import "./educationDetailContent.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import EducationOffcanvas from "./EducationOffcanvas";

type Props = {
  educationTitle: string;
  educationSubTitle?: string;
  educationType: string;
  educationTime: string;
};

const EducationDetailContent = (props: Props) => {
  const completedIcon = "/images/completed.svg";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <div className="accordion-container">
        <Row className="activity-row">
          <Col className="col-lg-5">
            <Accordion defaultActiveKey="0">
              <AccordionItem eventKey="0">
                <AccordionHeader className="education-title">
                  {props.educationTitle}
                </AccordionHeader>
                <div>
                  <AccordionBody className="education-subtitle" role="button">
                    {props.educationSubTitle}
                    <AccordionBody className="education-type">
                      {props.educationType} - {props.educationTime}
                    </AccordionBody>

                    <img className="completed-icon" src={completedIcon} />
                  </AccordionBody>
                  <AccordionBody className="education-subtitle" role="button">
                    {props.educationSubTitle}
                    <AccordionBody className="education-type">
                      {props.educationType} - {props.educationTime}
                    </AccordionBody>

                    <img className="completed-icon" src={completedIcon} />
                  </AccordionBody>
                </div>
              </AccordionItem>
              <AccordionItem eventKey="1">
                <AccordionHeader>{props.educationTitle}</AccordionHeader>
                <AccordionBody className="education-subtitle">
                  {props.educationSubTitle}
                  <AccordionBody className="education-type">
                    {props.educationType} - {props.educationTime}
                  </AccordionBody>
                  <img className="completed-icon" src={completedIcon} />
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>

          <Col>
            <Row>
              <Col>
                <div className="activity-content-info">
                  <div className="activity-largeImageFileName activity-video">
                    <div className="locked">
                      <img src="https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg" />
                      <i className="ss-icon ss-lock" />
                    </div>
                  </div>
                  <Card className="activity-card">
                    <div className="activity-unit-detail">
                      <Row>
                        <Col lg={9}>
                          <div className="unit-detail-title">
                            <label>{props.educationTitle}</label>
                          </div>
                          <div className="unit-detail-col unit-detail-col-default">
                            {props.educationType} - {props.educationTime}
                          </div>
                          <div className="unit-detail-col unit-detail-col-score text-green">
                            {/* {props.point} PUAN */} 100 PUAN
                          </div>
                          <div className="unit-detail-col unit-detail-col-status last-child text-green">
                            <i className="ss-icon ss-like" />
                            Tebrikler, tamamladın!
                          </div>
                        </Col>
                        <Col lg={3}>
                          <div className="ant-space ant-space-vertical">
                            <button
                              type="button"
                              className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn"
                              onClick={handleShow}
                            >
                              <label className="ant-btn-text">DETAY</label>
                              <div className="drawer">
                                <EducationOffcanvas
                                  imageUrl="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=DiBldjEKnwKDQVcjzXYj%2bUxp8rPm9JXZ"
                                  educationName={props.educationTitle}
                                  educationType={props.educationType}
                                  timeSpent={props.educationTime}
                                  point={100}
                                  button={true}
                                  show={show}
                                  hide={handleClose}
                                />
                              </div>
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EducationDetailContent;
