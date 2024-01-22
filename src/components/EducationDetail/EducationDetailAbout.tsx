import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./educationDetailAbout.css";

type Props = {
  startDate: string;
  endDate: string;
  timeSpent: string;
  estimatedDuration: string;
  category: string;
  company: string;
};

const EducationDetailAbout = (props: Props) => {
  return (
    <Container>
      <div className="activity-detail-info">
        <div className="info-section">
          <Row>
            <Col lg={2}>
              <img
                className="sg-icon sg-start-date"
                src="/images/start-date.png"
              />
              <strong>Başlangıç</strong>
            </Col>
            <Col lg={10}>{props.startDate}</Col>
          </Row>
          <Row>
            <Col lg={2}>
              <img
                className="hidden-icon sg-icon sg-start-date"
                src="/images/start-date.png"
              />
              <strong>Bitiş</strong>
            </Col>
            <Col lg={10}> {props.endDate}</Col>
          </Row>
        </div>
        <div className="info-section row">
          <Col lg={2}>
            <img className="sg-icon sg-stopwatch" src="/images/stopwatch.png" />
            <strong>Geçirdiğin Süre</strong>
          </Col>
          <Col lg={10}>{props.timeSpent}</Col>
        </div>
        <div className="info-section row">
          <Col lg={2}>
            <img className="sg-icon sg-stopwatch" src="/images/stopwatch.png" />
            <strong>Tahmini Süre</strong>
          </Col>
          <Col lg={10}>{props.estimatedDuration}</Col>
        </div>
        <div className="info-section row">
          <Col lg={2}>
            <img className="sg-icon sg-tag" src="/images/price-tag.png" />
            <strong>Kategori</strong>
          </Col>
          <Col lg={10}>{props.category}</Col>
        </div>
        <div className="info-section row">
          <Col lg={2}>
          <img className="sg-icon sg-file" src="/images/file.png" />
            <strong>İçerik</strong>
          </Col>
          <Col lg={10}>1</Col>
        </div>
        <div className="info-section file row">
          <Col lg={2}>
          <img className="hidden-icon sg-icon sg-file" src="/images/file.png" />
            <label>Video</label>
          </Col>
          <Col lg={10}>1</Col>
        </div>
        <div id="last-section" className="info-section row">
          <Col lg={2}>
            <img className="sg-icon sg-briefcase" src="/images/briefcase.png" />
            <strong>Üretici Firma</strong>
          </Col>
          <Col lg={10}>
            <a className="btn-change">{props.company}</a>
          </Col>
        </div>
      </div>
    </Container>
  );
};

export default EducationDetailAbout;
