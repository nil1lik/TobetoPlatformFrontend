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
                    {/* <div className="date-info-container">
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
                    </div> */}
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
                          {/* <img
                                  className="like-img"
                                  src="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708375112/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFydC1zdmciIHZpZXdCb3g9IjQ2NyAzOTIgNTggNTciPjxnIGlkPSJHcm91cCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Njcg_ho40md.svg"
                                /> */}
                          <svg
                            xmlns="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708375112/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFydC1zdmciIHZpZXdCb3g9IjQ2NyAzOTIgNTggNTciPjxnIGlkPSJHcm91cCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Njcg_ho40md.svg"
                            id="heart-svg"
                            viewBox="480 406 30 60"
                            width={35}
                          >
                            <g
                              id="Group"
                              fill="none"
                              fill-rule="evenodd"
                              transform="translate(467 392)"
                            >
                              <path
                                d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                                id="heart"
                                fill="#AAB8C2"
                              />
                              <circle
                                id="main-circ"
                                fill="#E2264D"
                                opacity="0"
                                cx="29.5"
                                cy="29.5"
                                r="1.5"
                              />
                              <g
                                id="grp7"
                                opacity="0"
                                transform="translate(7 6)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#9CD8C3"
                                  cx="2"
                                  cy="6"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#8CE8C3"
                                  cx="5"
                                  cy="2"
                                  r="2"
                                />
                              </g>
                              <g
                                id="grp6"
                                opacity="0"
                                transform="translate(0 28)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#CC8EF5"
                                  cx="2"
                                  cy="7"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#91D2FA"
                                  cx="3"
                                  cy="2"
                                  r="2"
                                />
                              </g>
                              <g
                                id="grp3"
                                opacity="0"
                                transform="translate(52 28)"
                              >
                                <circle
                                  id="oval2"
                                  fill="#9CD8C3"
                                  cx="2"
                                  cy="7"
                                  r="2"
                                />
                                <circle
                                  id="oval1"
                                  fill="#8CE8C3"
                                  cx="4"
                                  cy="2"
                                  r="2"
                                />
                              </g>
                              <g
                                id="grp2"
                                opacity="0"
                                transform="translate(44 6)"
                              >
                                <circle
                                  id="oval2"
                                  fill="#CC8EF5"
                                  cx="5"
                                  cy="6"
                                  r="2"
                                />
                                <circle
                                  id="oval1"
                                  fill="#CC8EF5"
                                  cx="2"
                                  cy="2"
                                  r="2"
                                />
                              </g>
                              <g
                                id="grp5"
                                opacity="0"
                                transform="translate(14 50)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#91D2FA"
                                  cx="6"
                                  cy="5"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#91D2FA"
                                  cx="2"
                                  cy="2"
                                  r="2"
                                />
                              </g>
                              <g
                                id="grp4"
                                opacity="0"
                                transform="translate(35 50)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#F48EA7"
                                  cx="6"
                                  cy="5"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#F48EA7"
                                  cx="2"
                                  cy="2"
                                  r="2"
                                />
                              </g>
                              <g
                                id="grp1"
                                opacity="0"
                                transform="translate(24)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#9FC7FA"
                                  cx="2.5"
                                  cy="3"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#9FC7FA"
                                  cx="7.5"
                                  cy="2"
                                  r="2"
                                />
                              </g>
                            </g>
                          </svg>
                          <span className="like-text">
                            <span>{props.likeCount}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ant-space-item">
                      <div className="activity-favorite">
                        {/* <img
                          className="add-favorite"
                          src={
                            "https://res.cloudinary.com/dcpbbqilg/image/upload/v1708375480/add-favorite_qtxzft.svg"
                          }
                          
                        /> */}
                        <svg
                          xmlns="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708375480/add-favorite_qtxzft.svg"
                          width="40"
                          height="40"
                          viewBox="0 0 200 200"
                        >
                          <defs>
                            <clipPath id="clip-Bookmark_İkon_-_2">
                              <rect width="200" height="200" />
                            </clipPath>
                          </defs>
                          <g
                            id="Bookmark_İkon_-_2"
                            data-name="Bookmark İkon - 2"
                            clip-path="url(#clip-Bookmark_İkon_-_2)"
                          >
                            <rect width="200" height="200" fill="#fff" />
                            <g
                              id="Group_5725"
                              data-name="Group 5725"
                              transform="translate(-1007.164 -980.861)"
                            >
                              <g
                                id="Group_5724"
                                data-name="Group 5724"
                                transform="translate(1031.164 985.861)"
                              >
                                <path
                                  id="Path_2194"
                                  data-name="Path 2194"
                                  d="M1031.164,985.86v190l76-61.75,76,61.75v-190Z"
                                  transform="translate(-1031.164 -985.86)"
                                  fill="#ffd228"
                                  stroke="#ffd228"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="10"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
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
                      <ProgressBar
                        className="ant-progress-bg"
                        now={props.completionRate}
                      />
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
