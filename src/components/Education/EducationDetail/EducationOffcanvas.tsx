import React, { useState } from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import "./educationOffcanvas.css";
import EducationDetailAboutComp from "./EducationDetailAboutComp";
import {
  categoryIcon,
  companyIcon,
  languageIcon,
  subcategoryIcon,
} from "../../../utilities/Constants/iconsList";
import {
  offcanvasButton,
  pointText,
} from "../../../utilities/Constants/constantValues";
import FormattedTime from "../../../utilities/Helpers/FormattedTime";

type Props = {
  imageUrl: string;
  educationName?: string;
  educationType?: string;
  time?: string;
  category?: string;
  language?: string;
  subcategory?: string;
  company?: string;
  likeCount: number;
  point?: number;
  button: boolean;
  show: boolean;
  hide: () => void;
};

const EducationOffcanvas = (props: Props) => {
  const colSize = 2;
  return (
    <Offcanvas
      show={props.show}
      onHide={props.hide}
      placement="end"
      backdrop={true}
      scroll={true}
    >
      <Offcanvas.Header>
        <Container>
          <i className="sg-icon sg-delete close"/>
          <Row>
            <Col lg={2}>
              <div className="image-area">
                <img src={props.imageUrl} />
              </div>
            </Col>
            <Col lg={6} className="course-drawer-header-info">
              <h3 className="education-detail-name">{props.educationName}</h3>
              <span className="new-tag blue">{props.educationType}</span>
              <span className="course-detail-info">
                <img
                  className="sg-icon sg-stopwatch"
                  src="/images/stopwatch.png"
                />       
                {<FormattedTime time = {props.time}/>}
              </span>
              <Col lg={12} className="like">
                <div className="education-like-area">
                  {/* <img className="education like-img" src="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708375112/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFydC1zdmciIHZpZXdCb3g9IjQ2NyAzOTIgNTggNTciPjxnIGlkPSJHcm91cCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Njcg_ho40md.svg" /> */}
                  <svg
                    xmlns="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708375112/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJoZWFydC1zdmciIHZpZXdCb3g9IjQ2NyAzOTIgNTggNTciPjxnIGlkPSJHcm91cCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Njcg_ho40md.svg"
                    id="heart-svg"
                    viewBox="476 406 40 30"
                    height={30}
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
                      <g id="grp7" opacity="0" transform="translate(7 6)">
                        <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                        <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                      </g>
                      <g id="grp6" opacity="0" transform="translate(0 28)">
                        <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                        <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                      </g>
                      <g id="grp3" opacity="0" transform="translate(52 28)">
                        <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                        <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                      </g>
                      <g id="grp2" opacity="0" transform="translate(44 6)">
                        <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                        <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                      </g>
                      <g id="grp5" opacity="0" transform="translate(14 50)">
                        <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                        <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                      </g>
                      <g id="grp4" opacity="0" transform="translate(35 50)">
                        <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                        <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                      </g>
                      <g id="grp1" opacity="0" transform="translate(24)">
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
                  <span className="like-area-span">{props.likeCount}</span>
                </div>
              </Col>
            </Col>
            <Col lg={4}>
              <Col lg={12} className="course-drawer-button-area">
                {props.button && (
                  <button className="education-btn">{offcanvasButton}</button>
                )}
              </Col>
              <Row className="course-drawer-status">
                <Col lg={12}>
                  <span className="course-status-info text-green ">
                    <i className="sg-like" />
                    <label>Tebrikler, tamamladın!</label>
                  </span>
                  <span className="course-status-score text-green">
                    {props.point} {pointText}
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container>
          <div className="info-section row">
            <EducationDetailAboutComp
              colSize={colSize}
              {...categoryIcon}
              educationData={props.category}
            />
          </div>
          <div className="info-section row">
            <EducationDetailAboutComp
              colSize={colSize}
              {...languageIcon}
              educationData={props.language}
            />
          </div>
          <div className="info-section row">
            <EducationDetailAboutComp
              colSize={colSize}
              {...subcategoryIcon}
              educationData={props.subcategory}
            />
          </div>
          <div className="info-section row">
            <EducationDetailAboutComp
              colSize={colSize}
              {...companyIcon}
              educationData={props.company}
            />
          </div>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default EducationOffcanvas;
