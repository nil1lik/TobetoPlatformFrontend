import React from "react";
import AccordionButton from "./AccordionButton";
import { Col, Container } from "react-bootstrap";

type Props = {};

const CatalogFilter = (props: Props) => {
  return (
    <>
      <Container>
        <Col>
          <div className="light">
            <div className="filter dm-none">
              <h2>Filtrele</h2>
              <hr className="mt-0" />
              <AccordionButton title="Kategoriler" />
              <AccordionButton title="Eğitim" />
              <AccordionButton title="Seviye" />
              <AccordionButton title="Konu" />
              <AccordionButton title="Yazılım Dili" />
              <AccordionButton title="Eğitmen" />
              <AccordionButton title="Durum" />
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default CatalogFilter;
