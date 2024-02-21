import React, { useContext, useEffect, useState } from "react";
import "./education.css";
import { Container, Row } from "react-bootstrap";
import TobetoPlatformTab from "../../components/Education/EducationsTab";
import { GetEducationItem } from "../../models/responses/education/getEducation";
import educationService from "../../services/educationService";
import EducationCard from "../../components/Education/EducationCard/EducationCard";
import FilterBar from "../../components/FilterBar/FilterBar";
import BannerTop from "../../components/Banner/BannerTop";
import Pagi from "../../components/Pagination/Pagi";
import {
  BannerTexts,
  EducationFilterBarTextValues,
  educationPageItemCountByPageMax,
} from "../../utilities/Constants/constantValues";
import { pageCalculate } from "../../utilities/Helpers/pageCountByItemsCalculator";
import { useEducation } from "../../contexts/EducationContext";
import FormattedDate from "../../utilities/Helpers/FormattedDate";
import { useLoadingContext } from "../../contexts/LoadingContext";

type Props = {};
const Education = (props: Props) => {
  // const [education, setEducation] = useState<GetEducationItem[]>([]);
  const { handleSetLoading } = useLoadingContext();
  const [childState, setChildState] = useState<number>(0);
  const [pageCount, setPageCount] = useState<any>(null);
  const [loadingPagination, setLoadingPagination] = useState<boolean>(false);
  const { educationData, setEducationData } = useEducation();

  const handleChildStateChange = (newState: number) => {
    setChildState(newState);
  };

  useEffect(() => {
    handleSetLoading((prev: any) => prev + 1);

    const fetchEducation = async () => {
      try {
        const result = await educationService.getAll(
          childState, 
          educationPageItemCountByPageMax
        );
        setPageCount(
          pageCalculate(result.data.count, educationPageItemCountByPageMax)
        );
        setEducationData(result.data.items);
      } catch (error) {
        console.error(
          "Eğitim verilerini getirme sırasında bir hata oluştu:",
          error
        );
      } finally {
        handleSetLoading((prev: any) => prev - 1);
        setLoadingPagination(true);
      }
    };
    setTimeout(fetchEducation, 500);
  }, [setEducationData]);

  return (
    <>
      <BannerTop
        bannerUrl="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708545803/edu-banner3.d7dc50ac_jbstok.svg"
        bannerText={BannerTexts.educationBanner}
      />
      <Container>
        <FilterBar
          dropdownName1={EducationFilterBarTextValues.dropdownName1}
          dropdownOpt1={EducationFilterBarTextValues.dropdownOpt1}
          dropdownName2={EducationFilterBarTextValues.dropdownName2}
          dropdownOpt2={EducationFilterBarTextValues.dropdownOpt2}
        />
        <Row className="mt-3 row">
          <div className="col-12 mb-4">
            <div className="nav nav-tabs mainTablist d-flex justify-content-center">
              <TobetoPlatformTab />
            </div>
          </div>
        </Row>
        <Row>
          {educationData.map((education) => (
            <EducationCard
              key={education.id}
              id={education.id}
              image={education.imageUrl} 
              text={education.name}
              date={<FormattedDate date={education.createdDate} />}
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
export default Education;
