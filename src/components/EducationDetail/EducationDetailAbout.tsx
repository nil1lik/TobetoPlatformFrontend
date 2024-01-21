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
              <strong>Başlangıç</strong>
            </Col>
            <Col lg={10}>{props.startDate}</Col>  
          </Row>
          <Row>
            <Col lg={2}><strong>Bitiş</strong></Col>
            <Col lg={10}> {props.endDate}</Col>
          </Row>
           </div>
           <div className="info-section row">
            <Col lg={2}><strong>Geçirdiğin Süre</strong></Col>
            <Col lg={10}>{props.timeSpent}</Col> 
           </div>
           <div className="info-section row">
            <Col lg={2}><strong>Tahmini Süre</strong></Col>
            <Col lg={10}>{props.estimatedDuration}</Col> 
           </div>
           <div className="info-section row">
            <Col lg={2}><strong>Kategori</strong></Col>
            <Col lg={10}>{props.category}</Col> 
           </div>
           <div className="info-section row">
            <Col lg={2}><strong>İçerik</strong></Col>
            <Col lg={10}></Col> 
           </div>
           <div className="info-section file row">
            <Col lg={2}><label>Video</label></Col>
            <Col lg={10}></Col>
           </div>
           <div id="last-section" className="info-section row">
           <Col lg={2}><strong>Üretici Firma</strong></Col>
            <Col lg={10}><a className="btn-change">{props.company}</a></Col> 
           </div>
      </div>
    </Container>
  );
};

export default EducationDetailAbout;
