import React, { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./educationDetailAbout.css";
import EducationDetailAboutComp from "./EducationDetailAboutComp";
import { categoryIcon, companyIcon, endDateIcon, estimatedDurationIcon, startDateIcon, timeSpentIcon } from "../../../utilities/Constants/iconsList";

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
              {...startDateIcon}
              educationAboutData={props.startDate}
            />
            <EducationDetailAboutComp
              {...endDateIcon}
              educationAboutData={props.endDate}
            />
          </Row>
        </div>
        <div className="info-section row">
        <EducationDetailAboutComp
              {...timeSpentIcon}
              educationAboutData={props.timeSpent}
            />
        </div>
        <div className="info-section row">
        <EducationDetailAboutComp
              {...estimatedDurationIcon}
              educationAboutData={props.estimatedDuration}
            />
        </div>
        <div className="info-section row">
        <EducationDetailAboutComp
              {...categoryIcon}
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
              {...companyIcon}
              educationAboutData={props.company} 
            />
        </div>
      </div>
    </Container>
  );
};

export default EducationDetailAbout;
