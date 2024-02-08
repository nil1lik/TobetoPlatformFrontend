import React, { useContext, useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { Row } from "react-bootstrap";
import AnnouncementCard from "../../components/Announcement/AnnouncementCard";
import announcementService from "../../services/announcementService";
import { GetAnnouncementTypeItem } from "../../models/responses/announcement/getAnnouncementTypeList";
import "./announcement.css";
import FilterBar from "../../components/FilterBar/FilterBar";
import BannerTop from "../../components/Banner/BannerTop";
import Pagi from "../../components/Pagination/Pagi";
import { BannerTexts, AnnouncementFilterBarTextValues, announcementPageItemCountByPage } from "../../utilities/Constants/constantValues";
import { pageCalculate } from "../../utilities/Helpers/pageCountByItemsCalculator";
import FilterByCheckbox from "../../components/FilterBar/FilterByCheckbox";
import SearchBarContext from "../../contexts/SearchBarContext";

type Props = {

};

const Announcement = (props: Props) => {
  const [childState, setChildState] = useState<number>(0);
  // const searchBarContext = useContext(SearchBarContext);
  // const { searchQuery} = searchBarContext;

  const handleChildStateChange = (newState: number) => {
    setChildState(newState);
  };

  const announcementIconSrc =
    process.env.PUBLIC_URL + `/images/announcementDate.svg`;
  const [announcement, setAnnouncement] = useState<GetAnnouncementTypeItem[]>(
    []
  );

//   const filteredAnnouncements = announcement.filter((announcement: any) =>
//   announcement.announcementName.toLowerCase().includes(searchQuery.toLowerCase())
// );

// Filtrelenmiş duyuruları döngü içinde kullanarak gösterin
// {filteredAnnouncements.map((announcement: any) => (
  // AnnouncementCard bileşenini burada kullanın
// ))}

  const [pageCount, setPageCount] = useState<any>(null)
  useEffect(() => {
    const fetchAnnouncement = async () => {
      const result = await announcementService.getAllAnnouncementTypeList(childState, announcementPageItemCountByPage);
      setPageCount( pageCalculate(result.data.count, announcementPageItemCountByPage))
      setAnnouncement(result.data.items);
    };
    fetchAnnouncement();
  }, [childState]);

  return (
    <>
      <BannerTop
        bannerUrl="https://tobeto.com/_next/static/media/edu-banner3.d7dc50ac.svg"
        bannerText={BannerTexts.announcementBanner}
      />
<SearchBarContext>
      <Container>
        <FilterByCheckbox/>
        <FilterBar
          dropdownName1={AnnouncementFilterBarTextValues.dropdownName1}
          dropdownOpt1={AnnouncementFilterBarTextValues.dropdownOpt1}
          dropdownName2={AnnouncementFilterBarTextValues.dropdownName2}
          dropdownOpt2={AnnouncementFilterBarTextValues.dropdownOpt2}
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
      </SearchBarContext>
    </>
  );
};

export default Announcement;
