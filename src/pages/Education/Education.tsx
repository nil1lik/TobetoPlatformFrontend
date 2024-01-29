import React from "react";
import TobetoPlatformBannerTop from "../../utilities/tobetoPlatform/TobetoPlatformBannerTop";
import TobetoPlatformDropdown from "../../utilities/tobetoPlatform/TobetoPlatformDropdown";
import TobetoPlatformSearchBar from "../../utilities/tobetoPlatform/TobetoPlatformSearchBar";
import "./education.css";
import { Col, Container, Row } from "react-bootstrap";
import TobetoPlatformTab from "../../utilities/tobetoPlatform/TobetoPlatformTab";
import EducationCard from "../../components/EducationCard/EducationCard";

type Props = {};

const Education = (props: Props) => {
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
                // act1="Adına Göre (A-Z)"
                // act2="Adına Göre (Z-A)"
                // act3="Tarihe Göre (Y-E)"
                // act4="Tarihe Göre (E-Y)"
                opt={["Adına Göre (A-Z)", "Adına Göre (Z-A)", "Tarihe Göre (Y-E)","Tarihe Göre (E-Y)"]}

              />
            </Col>
            <Col></Col>
          </Row>
        </div>

        <Row className="mt-3 row">
          <div className="col-12 mb-4">
            <div className="nav nav-tabs mainTablist d-flex justify-content-center">
              <TobetoPlatformTab />
            </div>
          </div>
          <div className="col-12">
            {/* <EducationCard></EducationCard> */} 
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Education;
