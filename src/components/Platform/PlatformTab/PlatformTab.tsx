import React, { useContext, useEffect, useState } from "react";
import EducationCard from "../../Education/EducationCard/EducationCard";
import SurveyNotFound from "../../Survey/SurveyNotFound";
import AnnouncementCard from "../../Announcement/AnnouncementCard";
import ApplicationCard from "../../Application/ApplicationCard";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./platformTab.css";
import AnnouncementService from "../../../services/announcementService";
import { GetAnnouncementTypeItem } from "../../../models/responses/announcement/getAnnouncementTypeList";
import { GetEducationItem } from "../../../models/responses/education/getEducation";
import educationService from "../../../services/educationService";
import {
  PlatformTabHeaders,
  showMoreText,
} from "../../../utilities/Constants/constantValues";
import {
  applicationApproved,
  applicationNotApproved,
  applicationPending,
  applicationWaiting,
} from "../../../utilities/Constants/ApplicationCardIconClasses";
import FormattedDate from "../../../utilities/Helpers/FormattedDate";
import {
  LoadingContext,
  useLoadingContext,
} from "../../../contexts/LoadingContext";
import { Link, useLoaderData } from "react-router-dom";
import { useEducation } from "../../../contexts/EducationContext";

type Props = {};

const PlatformTab = (props: Props) => {
  const { handleSetLoading } = useLoadingContext();
  const { educationData, setEducationData } = useEducation();

  // const [education, setEducation] = useState<GetEducationItem[]>([]);
  const [announcement, setAnnouncement] = useState<GetAnnouncementTypeItem[]>(
    []
  );

  const announcementIconSrc =
    process.env.PUBLIC_URL + `/images/announcementDate.svg`;

  useEffect(() => {
    handleSetLoading((prev: any) => prev + 1);

    const fetchEducation = async () => {
      const result = await educationService.getByFilter(0, 4);
      setEducationData(result.data.items);
    };

    const fetchAnnouncement = async () => {
      const result = await AnnouncementService.getAllAnnouncementTypeList(0, 3);
      setAnnouncement(result.data.items);
    };

    setTimeout(() => {
      fetchEducation();
      fetchAnnouncement();
      handleSetLoading((prev: any) => prev - 1);
    }, 500);
  }, [setEducationData]);

  return (
    <Tabs
      defaultActiveKey="basvurular"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 platform-tab"
    >
      <Tab eventKey="basvurular" title={PlatformTabHeaders.applications}>
        <Container>
          <Row>
            <Col className="col-6">
              <ApplicationCard
                cardHeader="İstanbul Kodluyor Bilgilendirme"
                cardText1="İstanbul Kodluyor Başvuru Formu onaylandı."
                cardText2="İstanbul Kodluyor Belge Yükleme Formu onaylandı."
                iconClass1={applicationApproved}
                iconClass2={applicationNotApproved}
              />
            </Col>
            <Col className="col-6">
              <ApplicationCard
                cardHeader="İstanbul Kodluyor Bilgilendirme"
                cardText1="İstanbul Kodluyor Başvuru Formu onaylandı."
                cardText2="İstanbul Kodluyor Belge Yükleme Formu onaylandı."
                iconClass1={applicationPending}
                iconClass2={applicationWaiting}
              />
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="egitimler" title={PlatformTabHeaders.educations}>
        <Row>
          {educationData.map((education: any) => (
            <EducationCard
              id={education.id}
              image={education.imageUrl}
              text={education.name}
              date={<FormattedDate date={education.createdDate} />}
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
      <Tab eventKey="duyuru-haber" title={PlatformTabHeaders.announcements}>
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
      <Tab eventKey="anket" title={PlatformTabHeaders.surveys}>
        <SurveyNotFound />
      </Tab>
    </Tabs>
  );
};

export default PlatformTab;
