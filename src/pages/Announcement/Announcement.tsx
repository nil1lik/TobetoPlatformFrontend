import React, { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { Row } from "react-bootstrap";
import AnnouncementCard from "../../components/Announcement/AnnouncementCard";
import announcementService from "../../services/announcementService";
import { GetAnnouncementTypeItem } from "../../models/responses/announcement/getAnnouncementTypeList";
import "./announcement.css";
import FilterBar from "../../components/FilterBar/FilterBar";
import BannerTop from "../../components/Banner/BannerTop";
import Pagi from "../../components/Pagination/Pagi";
import { C } from "@fullcalendar/core/internal-common";
import { announcementPageItemCountByPage } from "../../utilities/Constants/constantValues";
import { pageCalculate } from "../../utilities/Helpers/pageCountByItemsCalculator";

type Props = {};

const Announcement = (props: Props) => {
  const [childState, setChildState] = useState<number>(0);
  
  const handleChildStateChange = (newState: number) => {
    setChildState(newState);
  };

  const announcementIconSrc =
    process.env.PUBLIC_URL + `/images/announcementDate.svg`;
  const [announcement, setAnnouncement] = useState<GetAnnouncementTypeItem[]>(
    []
  );

  const [pageCount, setPageCount] = useState<any>(null)

  useEffect(() => {
    const fetchAnnouncement = async () => {
      const result = await announcementService.getAllAnnouncementTypeList(childState, announcementPageItemCountByPage); //Clean code'a çevirilecek.
      setPageCount( pageCalculate(result.data.count, announcementPageItemCountByPage))
      setAnnouncement(result.data.items);
    };
    fetchAnnouncement();
  }, [childState]);

  return (
    <>
      <BannerTop
        bannerUrl="https://tobeto.com/_next/static/media/edu-banner3.d7dc50ac.svg"
        bannerText="Duyurularım"
      />

      <Container>
        <FilterBar
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
          <Pagi handleChildStateChange={ handleChildStateChange}
          pageCount={pageCount}
           />
        </Row>
      </Container>
    </>
  );
};

export default Announcement;
