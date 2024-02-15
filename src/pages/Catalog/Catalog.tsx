import React from "react";
import BannerTop from "../../components/Banner/BannerTop";
import { Col, Container, Row } from "react-bootstrap";
import CatalogCard from "../../components/Catalog/CatalogCard";
import FilterBar from "../../components/FilterBar/FilterBar";
import CatalogFilter from "../../components/Catalog/CatalogFilter";
import { BannerTexts } from "../../utilities/Constants/constantValues";
import SearchBar from "../../components/SearchBar/SearchBar";

type Props = {};

const Catalog = (props: Props) => {
  return (
    <>
      <BannerTop
        bannerUrl="https://tobeto.com/_next/static/media/edu-banner2.8923a47d.svg"
        bannerText={BannerTexts.catalogBanner}
      />

      <Container className="mt-3">
        <Row>
          <Col className="col-md-3 col-md-3 col-12">
            <CatalogFilter />
          </Col>
          <Col className="col-lg-9 col-md-9 col-12">
            <Container>
              <Col className="col-md-5 col-12 mb-4 form-control border-0">
                <SearchBar formClassName="w-100 mr-sm-2 " />
              </Col>
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
