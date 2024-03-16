import React, { useEffect, useState } from "react";
import BannerTop from "../../components/Banner/BannerTop";
import { Col, Container, Row } from "react-bootstrap";
import CatalogCard from "../../components/Catalog/CatalogCard";
import CatalogFilter from "../../components/Catalog/CatalogFilter";
import { BannerTexts} from "../../utilities/Constants/constantValues";
import SearchBar from "../../components/SearchBar/SearchBar";
import { GetCatalogResponseItem } from "../../models/responses/catalog/getCatalogResponse";
import catalogService from "../../services/catalogService";

type Props = {};

const Catalog = (props: Props) => {
  const [childState, setChildState] = useState<number>(0);
  const [getCatalog, setGetCatalog] = useState<GetCatalogResponseItem[]>([]);

  const fetchgetCatalogList = async () => {
    try {
      const result = await catalogService.getCatalogAll(0,9);
      setGetCatalog(result.data.items);
    } catch (error) {
      console.error("Veri getirme işlemi sırasında hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchgetCatalogList(
    );
  }, []);

  return (
    <>
      <BannerTop
        bannerUrl="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708545803/edu-banner3.d7dc50ac_jbstok.svg"
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
                {getCatalog.map((catalog: any) => (
                  <CatalogCard
                    name={catalog.name}
                    imageUrl={catalog.imageUrl}
                    instructorName={catalog.instructorName}
                    instructorSurname={catalog.instructorSurname}
                    time={catalog.time}
                  />
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Catalog;
