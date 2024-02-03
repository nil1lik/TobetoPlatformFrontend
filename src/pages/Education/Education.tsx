import React, { useEffect, useState } from "react";
import "./education.css";
import { Container, Row } from "react-bootstrap";
import TobetoPlatformTab from "../../components/Education/EducationsTab";
import { GetEducationItem } from "../../models/responses/education/getEducation";
import educationService from "../../services/educationService";
import EducationCard from "../../components/Education/EducationCard/EducationCard";
import Paginations from "../../components/Pagination/Pagination";
import FilterBar from "../../components/FilterBar/FilterBar";
import BannerTop from "../../components/Banner/BannerTop";

type Props = {};
const Education = (props: Props) => {
  const [education, setEducation] = useState<GetEducationItem[]>([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const result = await educationService.getAll(0, 16);
      setEducation(result.data.items);
    };
    fetchEducation();
  }, []);

  return (
    <>
      <BannerTop
        bannerUrl="https://tobeto.com/_next/static/media/edu-banner3.d7dc50ac.svg"
        bannerText="Eğitimlerim"
      />
      <Container>
        <FilterBar
          dropdownName1="Kurum Seçiniz"
          dropdownOpt1={["İstanbul Kodluyor"]}
          dropdownName2="Sıralama"
          dropdownOpt2={[
            "Adına Göre (A-Z)",
            "Adına Göre (Z-A)",
            "Tarihe Göre (Y-E)",
            "Tarihe Göre (E-Y)",
          ]}
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
          <Paginations />
        </Row>
      </Container>
    </>
  );
};
export default Education;
