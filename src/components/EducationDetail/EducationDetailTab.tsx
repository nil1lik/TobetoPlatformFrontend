import React from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import EducationDetailContent from "./EducationDetailContent";
import EducationDetailAbout from "./EducationDetailAbout";
import "./educationDetailTab.css" 

type Props = {};

const EducationDetailTab = (props: Props) => {
  return (
    <Tabs
      defaultActiveKey="icerik"
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
                educationType="video"
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
                startDate="1 ocak"
                endDate="1 aralık"
                timeSpent="3 saat"
                estimatedDuration="4 saat"
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
