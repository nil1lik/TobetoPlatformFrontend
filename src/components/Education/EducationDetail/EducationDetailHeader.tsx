import React, { useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./educationDetailHeader.css";
import { pointText } from "../../../utilities/Constants/constantValues";
import HeartIcon from "../../../utilities/Helpers/HeartIcon";

type Props = {
  imageUrl: string;
  educationName: string;
  likeCount: number;
  educationPoint: number;
  completionRate: number;
  isLiked: boolean;
  isFavourited: boolean;
};

const EducationDetailHeader = (props: Props) => {
  const [liked, setLiked] = useState(props.isLiked);
  const [likeCount, setLikeCount] = useState(props.likeCount);
  
  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

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
                          <label>Hadi Başlayalım!</label>
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
                        {props.educationPoint} {pointText}
                      </div>
                    </div>
                    <div className="ant-space-item">
                      <div className="like-header">
                        <div className="like-area">
                          <HeartIcon liked={liked} toggleLike={toggleLike} />

                          <span
                            className={
                              "like-text " +
                              (liked ? "liked-text" : "not-liked-text")
                            }
                          >
                            <span>{likeCount}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ant-space-item">
                      <div className="activity-favorite">
                        {/* <img
                          className="add-favorite path"
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
