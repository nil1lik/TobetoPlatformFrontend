import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./educationDetailHeader.css";

type Props = {
  imageUrl: string;
  educationName: string;
  likeCount: number;
  educationPoint: number;
  completionRate: string;
};

const EducationDetailHeader = (props: Props) => {
  const educationImage = "https://" + props.imageUrl; //düzenle
  return (
    <Container>
      <Row className="education-detail-header">
        <Col lg={1}>
          <img className="activity-image" src={educationImage} />
        </Col>

        <Col lg={11}>
          <Row>
            <Col className="col-xs-12 ">
              <Row>
                <Col lg={7}>
                  <div className="activity-info">
                    <h3 className="education-name">{props.educationName}</h3>
                    <div className="date-info-container">
                      <label className="first-of-type">
                        <div className="date-info text-green">
                          <i className="ss-icon ss-like" />
                          <label>Tamamladın</label>
                        </div>
                        <img
                          className="question-circle"
                          src="/images/circle-question.svg"
                        />
                      </label>
                    </div>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className="ant-space ant-space-align-center education-admiration">
                    <div className="ant-space-item">
                      <div className="activity-score text-white background-green">
                        {props.educationPoint} PUAN
                      </div>
                    </div>
                    <div className="ant-space-item">
                      <div className="like">
                        <div className="like-area">
                          <span className="like-button">
                            <div className="main-content">
                              <div className="sub-content">
                                <img
                                  className="like-img"
                                  src="/images/heart.svg"
                                />
                              </div>
                            </div>
                          </span>
                          <span className="like-text">
                            <span>{props.likeCount}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ant-space-item">
                      <div className="activity-favorite">
                        <img
                          className="add-favorite"
                          src={
                            process.env.PUBLIC_URL + "/images/add-favorite.svg"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Row>
              <Col>
                <div className="activity-progress-bar">
                  <div className="ant-progress-outer">
                    <div className="progress-bar">
                      <ProgressBar className="ant-progress-bg" now={100} />
                    </div>
                  </div>
                  <label className="completion-rate">
                    {props.completionRate}%
                  </label>
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default EducationDetailHeader;
