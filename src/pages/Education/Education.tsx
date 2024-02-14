import React, { useEffect, useState } from "react";
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
import { SearchbarContext } from "../../contexts/SearchBarContext";

type Props = {};
const Education = (props: Props) => {
  const [education, setEducation] = useState<GetEducationItem[]>([]);
  const [childState, setChildState] = useState<number>(0);
  const [pageCount, setPageCount] = useState<any>(null);

  const handleChildStateChange = (newState: number) => {
    setChildState(newState);
  };

  useEffect(() => {
    const fetchEducation = async () => {
      const result = await educationService.getAll(
        childState,
        educationPageItemCountByPageMax
      );
      setPageCount(
        pageCalculate(result.data.count, educationPageItemCountByPageMax)
      );
      setEducation(result.data.items);
    };
    fetchEducation();
  }, []);

  return (
    <>
      <BannerTop
        bannerUrl="https://tobeto.com/_next/static/media/edu-banner3.d7dc50ac.svg"
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
        <Row className="pagination">
          <Pagi
            handleChildStateChange={handleChildStateChange}
            pageCount={pageCount}
          />
        </Row>
      </Container>
    </>
  );
};
export default Education;
