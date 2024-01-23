import React, { useEffect, useState } from "react";
import EducationCard from "../EducationCard/EducationCard";
import SurveyNotFound from "../Survey/SurveyNotFound";
import AnnouncementCard from "../Announcement/AnnouncementCard";
import ApplicationCard from "../Application/ApplicationCard";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./platformTab.css"
import AnnouncementService from "../../services/announcementService";

type Props = {
};

const PlatformTab = (props: Props) => {
  const announcementIconSrc = process.env.PUBLIC_URL + `/images/announcementDate.svg`;
  const [announcement, setAnnouncement] = useState<any[]>([])
  useEffect(()=> {
    const announcementService = new AnnouncementService();
    announcementService.getAnnouncement()
    .then((result) => {setAnnouncement(result.data.items)})
  },[]);

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
          {
            announcement.map((announcement)=> (
              <AnnouncementCard
            announcementType={announcement.AnnouncementTypeName}
            announcementEducation={announcement.name}
            announcementTitle={announcement.title}
            annoucementDateIcon={announcementIconSrc}
            announcementDate={announcement.createdDate}
          />
            ))
          }
        </Row>
      </Tab>
      <Tab eventKey="anket" title="Anketlerim">
        <SurveyNotFound />
      </Tab>
    </Tabs>
  );
};

export default PlatformTab;
