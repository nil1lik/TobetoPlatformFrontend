import React from "react";
import BannerTop from "../../components/Banner/BannerTop";
import { Col, Container, Row } from "react-bootstrap";
import CatalogCard from "../../components/Catalog/CatalogCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import CatalogFilter from "../../components/Catalog/CatalogFilter";

type Props = {};

const Catalog = (props: Props) => {
  return (
    <>
      <BannerTop
        bannerUrl="https://tobeto.com/_next/static/media/edu-banner2.8923a47d.svg"
        bannerText="Katalog"
      />
       <FilterBar
          dropdownName1="Eğitim Seçiniz"
          dropdownOpt1={["Algoritma"]}
          dropdownName2="Sıralama"
          dropdownOpt2={[
            "Adına Göre (A-Z)",
            "Adına Göre (Z-A)",
            "Tarihe Göre (Y-E)",
            "Tarihe Göre (E-Y)",
          ]}
        />
      <Container className="mt-3">
        <Row>
          <Col className="col-md-3 col-md-3 col-12">
            <CatalogFilter/>
          </Col>
          <Col className="col-lg-9 col-md-9 col-12">
            <Container>
              <Row>
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Catalog;
