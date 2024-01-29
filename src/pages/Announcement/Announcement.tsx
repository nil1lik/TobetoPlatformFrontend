import React, { useEffect, useState } from "react";
import TobetoPlatformBannerTop from "../../utilities/tobetoPlatform/TobetoPlatformBannerTop";
import { Container, Pagination } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import TobetoPlatformSearchBar from "../../utilities/tobetoPlatform/TobetoPlatformSearchBar";
import TobetoPlatformDropdown from "../../utilities/tobetoPlatform/TobetoPlatformDropdown";
import AnnouncementCard from "../../components/Announcement/AnnouncementCard";
import announcementService from "../../services/announcementService";
import { GetAnnouncementTypeItem } from "../../models/responses/announcement/getAnnouncementTypeList";
import "./announcement.css";

type Props = {};

const Announcement = (props: Props) => {
  const announcementIconSrc =
    process.env.PUBLIC_URL + `/images/announcementDate.svg`;
  const [announcement, setAnnouncement] = useState<GetAnnouncementTypeItem[]>(
    []
  );

  useEffect(() => {
    const fetchAnnouncement = async () => {
      const result = await announcementService.getAllAnnouncementTypeList(0, 9);
      setAnnouncement(result.data.items);
    };
    fetchAnnouncement();
  }, []);

  

  return ( 
    <>
      <TobetoPlatformBannerTop
        url="https://tobeto.com/_next/static/media/edu-banner3.d7dc50ac.svg"
        spanText="Duyurularım"
      />
      <Container>
        <div className="filter-section mt-3">
          <Row>
            <Col className="col-md-5 col-12 mb-4">
              <TobetoPlatformSearchBar />
            </Col>
            <Col>
              <TobetoPlatformDropdown
                dropdownName="Organizasyon"
                opt={["İstanbul Kodluyor"]}
                showDefaultOption={true}
              /> 
            </Col>
            <Col>
              <TobetoPlatformDropdown
                dropdownName="Sıralama"
                opt={["Adına Göre (A-Z)", "Adına Göre (Z-A)", "Tarihe Göre (Y-E)","Tarihe Göre (E-Y)"]}
                showDefaultOption={true}
              />
            </Col>
            <Col>
              <button className="announcement-btn" />
            </Col>
          </Row>
        </div>
        <Row className="announcement-card-line">
          {announcement.map((announcement: any) => (
            <AnnouncementCard
              announcementType={announcement.announcementTypeName}
              announcementName={announcement.name}
              announcementTitle={announcement.title}
              annoucementDateIcon={announcementIconSrc}
              announcementDate={announcement.createdDate}
              announcementDescription={announcement.description}
            ></AnnouncementCard>
          ))}
        </Row>
        <Row className="pagination">
          <Pagination>
              <Pagination.Prev className="pagi-prev"/>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Next className="pagi-next"/>
          </Pagination>
        </Row>
      </Container>
    </>
  );
};

export default Announcement;
