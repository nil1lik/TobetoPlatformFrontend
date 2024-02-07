import React, { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./educationDetailAbout.css";
import EducationDetailAboutComp from "./EducationDetailAboutComp";

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
            <EducationDetailAboutComp
              className={"sg-icon sg-start-date"}
              image={"/images/start-date.png"}
              valueHeader={"Başlangıç"}
              educationAboutData={props.startDate}
            />
            <EducationDetailAboutComp
              className={"hidden-icon sg-icon sg-start-date"}
              image={"/images/start-date.png"}
              valueHeader={"Bitiş"}
              educationAboutData={props.endDate}
            />
          </Row>
        </div>
        <div className="info-section row">
        <EducationDetailAboutComp
              className={"sg-icon sg-stopwatch"}
              image={"/images/stopwatch.png"}
              valueHeader={"Geçirdiğin Süre"}
              educationAboutData={props.timeSpent}
            />
        </div>
        <div className="info-section row">
        <EducationDetailAboutComp
              className={"sg-icon sg-stopwatch"}
              image={"/images/stopwatch.png"}
              valueHeader={"Tahmini Süre"}
              educationAboutData={props.estimatedDuration}
            />
        </div>
        <div className="info-section row">
        <EducationDetailAboutComp
              className={"sg-icon sg-tag"}
              image={"/images/price-tag.png"}
              valueHeader={"Kategori"}
              educationAboutData={props.category}
            />
        </div>
        <div className="info-section row">
        <EducationDetailAboutComp
              className={"sg-icon sg-file"}
              image={"/images/file.png"}
              valueHeader={"İçerik"}
              educationAboutData={"1"} //İÇERİK ?
            />
        </div>
        <div className="info-section file row">
        <EducationDetailAboutComp
              className={"hidden-icon sg-icon sg-file"}
              image={"/images/file.png"}
              valueHeader={"Video"}
              educationAboutData={"1"} 
            />
        </div>
        <div id="last-section" className="info-section row">
        <EducationDetailAboutComp
              className={"sg-icon sg-briefcase"}
              image={"/images/briefcase.png"}
              valueHeader={"Üretici Firma"}
              educationAboutData={props.company} 
            />
        </div>
      </div>
    </Container>
  );
};

export default EducationDetailAbout;
