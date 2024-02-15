import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AnnouncementCard from "../../components/Announcement/AnnouncementCard";
import announcementService from "../../services/announcementService";
import { GetAnnouncementTypeItem } from "../../models/responses/announcement/getAnnouncementTypeList";
import "./announcement.css";
import FilterBar from "../../components/FilterBar/FilterBar";
import BannerTop from "../../components/Banner/BannerTop";
import Pagi from "../../components/Pagination/Pagi";
import {
  BannerTexts,
  AnnouncementFilterBarTextValues,
  announcementPageItemCountByPage,
} from "../../utilities/Constants/constantValues";
import { pageCalculate } from "../../utilities/Helpers/pageCountByItemsCalculator";
import FilterByCheckbox from "../../components/FilterBar/FilterByCheckbox";
import { SearchbarContext } from "../../contexts/SearchBarContext";
import { LoadingContext } from "../../contexts/LoadingContext";

type Props = {};

const Announcement = (props: Props) => {
  const [childState, setChildState] = useState<number>(0);
  const { setLoading } = useContext<any>(LoadingContext);
  const [pageCount, setPageCount] = useState<any>(null);
  const [searchbarValue, setSearchbarValue] = useState<string>("");
  const [searchbarFocus, setSearchbarFocus] = useState<boolean>(false);
  const [loadingPagination, setLoadingPagination] = useState<boolean>(false); 

  const handleChildStateChange = (newState: number) => {
    setChildState(newState);
  };

  const announcementIconSrc =
    process.env.PUBLIC_URL + `/images/announcementDate.svg`;
  const [announcement, setAnnouncement] = useState<GetAnnouncementTypeItem[]>(
    []
  );

  useEffect(() => {
    setLoading((prev: any) => prev + 1);

    const fetchAnnouncement = async () => {
      try {
        const result = await announcementService.getAllAnnouncementTypeList(
          childState,
          announcementPageItemCountByPage
        );
        setPageCount(
          pageCalculate(result.data.count, announcementPageItemCountByPage)
        );
        setAnnouncement(result.data.items);
      } catch (error) {
        console.error("Veri getirme işlemi sırasında hata oluştu:", error);
      } finally {
        setLoading((prev: any) => prev - 1);
        setLoadingPagination(true); 
      }
    };
    setTimeout(fetchAnnouncement, 500);

  }, [childState]);

  return (
    <SearchbarContext.Provider
      value={{
        searchbarValue,
        setSearchbarValue,
        searchbarFocus,
        setSearchbarFocus,
      }}
    >
      <BannerTop
        bannerUrl="https://tobeto.com/_next/static/media/edu-banner3.d7dc50ac.svg"
        bannerText={BannerTexts.announcementBanner}
      />
      <Container>
        <FilterByCheckbox />

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
              key={announcement.id} 
            />
          ))}
        </Row>

        <Row className="pagination">
          {loadingPagination && ( 
            <Pagi
              handleChildStateChange={handleChildStateChange}
              pageCount={pageCount}
            />
          )}
        </Row>
      </Container>
    </SearchbarContext.Provider>
  );
};

export default Announcement;
