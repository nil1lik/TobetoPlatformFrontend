import React, { useEffect, useState } from "react";
import EducationCard from "../EducationCard/EducationCard";
import SurveyNotFound from "../Survey/SurveyNotFound";
import AnnouncementCard from "../Announcement/AnnouncementCard";
import ApplicationCard from "../Application/ApplicationCard";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./platformTab.css";
import AnnouncementService from "../../core/services/announcementService";
import { GetAnnouncementTypeItem } from "../../models/responses/announcement/getAnnouncementTypeList";
import { Link } from "react-router-dom";
import { GetEducationItem } from "../../models/responses/education/getEducation";
import educationService from "../../core/services/educationService";

type Props = {};

const PlatformTab = (props: Props) => {
  const [education, setEducation] = useState<GetEducationItem[]>([]);
  const [announcement, setAnnouncement] = useState<GetAnnouncementTypeItem[]>(
    []
  );

  const showMoreText = "Daha Fazla Göster";
  const announcementIconSrc =
    process.env.PUBLIC_URL + `/images/announcementDate.svg`;

  const fetchEducation = async () => {
    const result = await educationService.getByFilter(0, 4);
    setEducation(result.data.items);
  };

  const fetchAnnouncement = async () => {
    const result = await AnnouncementService.getAllAnnouncementTypeList(0, 3);
    setAnnouncement(result.data.items);
  };

  useEffect(() => {
    fetchEducation();
    fetchAnnouncement();
  }, []);

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
        <Row>
          {education.map((education: any) => (
            <EducationCard
              image={education.imageUrl}
              text={education.name}
              date={new Date(education.createdDate).toLocaleString("tr-TR", {
                timeZone: "Europe/Istanbul",
                hour12: false,
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            />
          ))}
        </Row>
        <Link to={"/egitimlerim/"} style={{ textDecoration: "none" }}>
          <div className="show-more">
            <Button className="show-more-button"></Button>
            <p className="show-more-text">{showMoreText}</p>
          </div>
        </Link>
      </Tab>
      <Tab eventKey="duyuru-haber" title="Duyuru ve Haberlerim">
        <Row>
          {announcement.map((announcement) => (
            <AnnouncementCard
              announcementType={announcement.announcementTypeName}
              announcementName={announcement.name}
              announcementTitle={announcement.title}
              annoucementDateIcon={announcementIconSrc}
              announcementDate={announcement.createdDate}
              announcementDescription={announcement.description}
            />
          ))}
          <Link to={"/duyurular"} style={{ textDecoration: "none" }}>
            <div className="show-more">
              <Button className="show-more-button"></Button>
              <p className="show-more-text">{showMoreText}</p>
            </div>
          </Link>
        </Row>
      </Tab>
      <Tab eventKey="anket" title="Anketlerim">
        <SurveyNotFound />
      </Tab>
    </Tabs>
  );
};

export default PlatformTab;
