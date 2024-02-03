import React, { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { Row } from "react-bootstrap";
import AnnouncementCard from "../../components/Announcement/AnnouncementCard";
import announcementService from "../../services/announcementService";
import { GetAnnouncementTypeItem } from "../../models/responses/announcement/getAnnouncementTypeList";
import "./announcement.css";
import Paginations from "../../components/Pagination/Pagination";
import FilterBar from "../../components/FilterBar/FilterBar";

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
      <Container>
        <FilterBar
          bannerUrl="https://tobeto.com/_next/static/media/edu-banner3.d7dc50ac.svg"
          bannerText="Duyurularım"
          dropdownName1="Organizasyon"
          dropdownOpt1={["İstanbul Kodluyor"]}
          dropdownName2="Sıralama"
          dropdownOpt2={[
            "Adına Göre (A-Z)",
            "Adına Göre (Z-A)",
            "Tarihe Göre (Y-E)",
            "Tarihe Göre (E-Y)",
          ]}
          filterBtn={true}

        />

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
          <Paginations />
        </Row>
      </Container>
  );
};

export default Announcement;
