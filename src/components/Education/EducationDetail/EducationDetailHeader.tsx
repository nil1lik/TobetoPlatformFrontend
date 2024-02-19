import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./educationDetailHeader.css";

type Props = {
  imageUrl: string;
  educationName: string;
  likeCount: number;
  educationPoint: number;
  completionRate: number;
};

const EducationDetailHeader = (props: Props) => {
  return (
    <Container>
      <Row className="education-detail-header">
        <Col lg={1}>
          <img className="activity-image" src={props.imageUrl} />
        </Col>

        <Col lg={11}>
          <Row>
            <Col className="col-xs-12 ">
              <Row>
                <Col>
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
                          src="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708375563/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIGNsYXNzPSIiIGRhdGEtaWNvbj0icXVlc3Rpb24tY2lyY2xlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgZmlsbD0i_febtsd.svg"
                        />
                      </label>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="ant-space-header ant-space-align-center education-admiration">
                    <div className="ant-space-item">
                      <div className="activity-score text-white background-green">
                        {props.educationPoint} PUAN
                      </div>
                    </div>
                    <div className="ant-space-item">
                      <div className="like-header">
                        <div className="like-area">
                          <span className="like-button">
                            <div className="main-content">
                              <div className="sub-content">
                                <img
                                  className="like-img"
                                  src="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708375112/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFydC1zdmciIHZpZXdCb3g9IjQ2NyAzOTIgNTggNTciPjxnIGlkPSJHcm91cCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Njcg_ho40md.svg"
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
                            "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708375480/add-favorite_qtxzft.svg"
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
                      <ProgressBar className="ant-progress-bg" now={props.completionRate} />
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
