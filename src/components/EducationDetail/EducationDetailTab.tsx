import React from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import EducationDetailContent from "./EducationDetailContent";
import EducationDetailAbout from "./EducationDetailAbout";
import "./educationDetailTab.css" 

type Props = {};

const EducationDetailTab = (props: Props) => {
  return (
    <Tabs
      defaultActiveKey="content"
      transition={false}
      id="noanim-tab-example"
      className="mb3 educationDetailTab"
    >
      <Tab eventKey="content" title="İçerik">
        <Container>
          <Row>
            <Col>
              <EducationDetailContent 
                educationTitle="Dr. Ecmel Ayral'dan Hoşgeldin Mesajı"
                educationSubTitle="Hoşgeldin Mesajı"
                educationType="Video"
                educationTime="3 dk"
              /> 
            </Col> 
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="about" title="Hakkında">
        <Container>
          <Row>
            <Col>
              <EducationDetailAbout
                startDate="21 EYL 2023 12:20"
                endDate="31 ARA 2023 23:59"
                timeSpent="2 dk"
                estimatedDuration="3 dk"
                category="Genel"
                company="Enocta"
              />
            </Col>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
};

export default EducationDetailTab;
