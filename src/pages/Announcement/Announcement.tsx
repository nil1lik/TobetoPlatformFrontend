import React, { useEffect, useState } from "react";
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
import { useLoadingContext } from "../../contexts/LoadingContext";
import {
  SearchbarProvider,
  useSearchbarContext,
} from "../../contexts/SearchBarContext";

type Props = {};

const Announcement = (props: Props) => {
  const [childState, setChildState] = useState<number>(0);
  const { handleSetLoading } = useLoadingContext();
  const [pageCount, setPageCount] = useState<any>(null);
  const [loadingPagination, setLoadingPagination] = useState<boolean>(false);

  const handleChildStateChange = (newState: number) => {
    setChildState(newState);
  };

  const announcementIconSrc =
    process.env.PUBLIC_URL + `/images/announcementDate.svg`;
  const [announcement, setAnnouncement] = useState<GetAnnouncementTypeItem[]>(
    []
  );
  const { searchbarValue, searchbarFocus, searchbarBlur } =
    useSearchbarContext();

  const fetchAnnouncement = async (count: number, countForPage: number) => {
    try {
      handleSetLoading((prev: number) => prev + 1);
      const result = await announcementService.getAllAnnouncementTypeList(
        childState,
        count
      );
      setPageCount(
        pageCalculate(result.data.count, count)
      );
      setAnnouncement(result.data.items);
    } catch (error) {
      console.error("Veri getirme işlemi sırasında hata oluştu:", error);
    } finally {
      handleSetLoading((prev: any) => prev - 1);
      setLoadingPagination(true);
    }
  };

  useEffect(() => {
    if (!searchbarFocus) {
      fetchAnnouncement(announcementPageItemCountByPage, announcementPageItemCountByPage);
    } else {
      fetchAnnouncement(100, 0);
    }
  }, [childState, searchbarFocus]);

  useEffect(() => {
    console.log(searchbarValue);
  }, [searchbarValue]);

  return (
    <>
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
    </>
  );
};

export default Announcement;
