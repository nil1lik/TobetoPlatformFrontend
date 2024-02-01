import React, { useEffect, useState } from "react";
import TobetoPlatformBannerTop from "../../utilities/tobetoPlatform/TobetoPlatformBannerTop";
import TobetoPlatformDropdown from "../../utilities/tobetoPlatform/TobetoPlatformDropdown";
import TobetoPlatformSearchBar from "../../utilities/tobetoPlatform/TobetoPlatformSearchBar";
import "./education.css";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import TobetoPlatformTab from "../../utilities/tobetoPlatform/TobetoPlatformTab";
import { GetEducationItem } from "../../models/responses/education/getEducation";
import educationService from "../../core/services/educationService";
import EducationCard from "../../components/EducationCard/EducationCard";

type Props = {};
const Education = (props: Props) => {
  const [education, setEducation] = useState<GetEducationItem[]>([]);

  const fetchEducation = async () => {
    const result = await educationService.getAll(0, 16);
    setEducation(result.data.items);
  };
  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <>
      <TobetoPlatformBannerTop
        url="https://tobeto.com/_next/static/media/edu-banner3.d7dc50ac.svg"
        spanText="Eğitimlerim"
      />
      <Container>
        <div className="filter-section mt-3">
          <Row>
            <Col className="col-md-5 col-12 mb-4">
              <TobetoPlatformSearchBar />
            </Col>
            <Col>
              <TobetoPlatformDropdown
                dropdownName="Kurum Seçiniz"
                opt={["İstanbul Kodluyor"]}
                showDefaultOption={true}
              />
            </Col>
            <Col>
              <TobetoPlatformDropdown
                dropdownName="Sıralama"
                opt={[
                  "Adına Göre (A-Z)",
                  "Adına Göre (Z-A)",
                  "Tarihe Göre (Y-E)",
                  "Tarihe Göre (E-Y)",
                ]}
              />
            </Col>
            <Col>
            <button className="filter-btn" /></Col>
          </Row>
        </div>

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
          <Pagination>
            <Pagination.Prev className="pagi-prev" />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Next className="pagi-next" />
          </Pagination>
        </Row>
      </Container>
    </>
  );
};
export default Education;
