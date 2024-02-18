import React, { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./educationDetailAbout.css";
import EducationDetailAboutComp from "./EducationDetailAboutComp";
import {
  categoryIcon,
  companyIcon,
  endDateIcon,
  estimatedDurationIcon,
  fileIcon,
  startDateIcon,
  timeSpentIcon,
} from "../../../utilities/Constants/iconsList";

type Props = {
  startDate: string;
  endDate: string;
  timeSpent: string;
  estimatedDuration: string;
  category: string;
  company: string;
};

const EducationDetailAbout = (props: Props) => {
  const colSize = 2;
  return (
    <Container>
      <div className="activity-detail-info">
        <div className="info-section">
          <Row>
            <EducationDetailAboutComp
              colSize={colSize}
              {...startDateIcon}
              educationData={props.startDate}
            />
            <EducationDetailAboutComp
              colSize={colSize}
              {...endDateIcon}
              educationData={props.endDate}
            />
          </Row>
        </div>
        <div className="info-section row">
          <EducationDetailAboutComp
            colSize={colSize}
            {...timeSpentIcon}
            educationData={props.timeSpent}
          />
        </div>
        <div className="info-section row">
          <EducationDetailAboutComp
            colSize={colSize}
            {...estimatedDurationIcon}
            educationData={props.estimatedDuration}
          />
        </div>
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
            {...fileIcon}
            valueHeader={"İçerik"}
            educationData={"1"} //İÇERİK ?
          />
        </div>
        <div className="info-section file row">
          <EducationDetailAboutComp
            colSize={colSize}
            {...fileIcon}
            valueHeader={"Video"}
            educationData={"1"}
          />
        </div>
        <div id="last-section" className="info-section row">
          <EducationDetailAboutComp
            colSize={colSize}
            {...companyIcon}
            educationData={props.company}
          />
        </div>
      </div>
    </Container>
  );
};

export default EducationDetailAbout;
