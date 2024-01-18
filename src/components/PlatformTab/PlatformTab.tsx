import React from "react";
import EducationCard from "../EducationCard/EducationCard";
import SurveyNotFound from "../Survey/SurveyNotFound";
import AnnouncementCard from "../Announcement/AnnouncementCard";
import ApplicationCard from "../Application/ApplicationCard";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./platformTab.css"

type Props = {
};

const PlatformTab = (props: Props) => {
  const announcementIconSrc = process.env.PUBLIC_URL + `/images/announcementDate.svg`;

  return (
    <Tabs
      defaultActiveKey="basvurular"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 platform-tab"
    >
      <Tab eventKey="basvurular" title="Başvurularım">
        <Container>
          <Row>
            <Col weight="33.3%">
              <ApplicationCard
                cardHeader="İstanbul Kodluyor Bilgilendirme"
                cardDescription="İstanbul Kodluyor Başvuru Formu onaylandı."
                cardText="İstanbul Kodluyor Belge Yükleme Formu onaylandı."
              />
            </Col>
            <Col>
              <ApplicationCard
                cardHeader="İstanbul Kodluyor Bilgilendirme"
                cardDescription="İstanbul Kodluyor Başvuru Formu onaylandı."
                cardText="İstanbul Kodluyor Belge Yükleme Formu onaylandı."
              />
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="egitimler" title="Eğitimlerim">
        <EducationCard />
      </Tab>
      <Tab eventKey="duyuru-haber" title="Duyuru ve Haberlerim">
        <Row>
          <AnnouncementCard
            announcementType="Duyuru"
            announcementEducation="İstanbul Kodluyor"
            announcementHeader="Ocak Ayı Tercih Formu Bilgilendirmesi"
            annoucementDateIcon={announcementIconSrc}
            announcementDate="12.01.2024"
          />
          <AnnouncementCard
            announcementType="Duyuru"
            announcementEducation="İstanbul Kodluyor"
            announcementHeader="Ocak Ayı Tercih Formu Bilgilendirmesi"
            annoucementDateIcon={announcementIconSrc}
            announcementDate="12.01.2024"
          />
          <AnnouncementCard
            announcementType="Duyuru"
            announcementEducation="İstanbul Kodluyor"
            announcementHeader="Ocak Ayı Tercih Formu Bilgilendirmesi"
            annoucementDateIcon={announcementIconSrc}
            announcementDate="12.01.2024"
          />
          <AnnouncementCard
            announcementType="Duyuru"
            announcementEducation="İstanbul Kodluyor"
            announcementHeader="Ocak Ayı Tercih Formu Bilgilendirmesi"
            annoucementDateIcon={announcementIconSrc}
            announcementDate="12.01.2024"
          />
        </Row>
      </Tab>
      <Tab eventKey="anket" title="Anketlerim">
        <SurveyNotFound />
      </Tab>
    </Tabs>
  );
};

export default PlatformTab;
