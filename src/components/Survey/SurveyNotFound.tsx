import React from "react";
import { Container, Figure } from "react-bootstrap";

type Props = {};

const SurveyNotFound = (props: Props) => {
  const logoSrc = process.env.PUBLIC_URL + "/images/notFound.4015d44b.svg";
  return (
    <div>
      <Container className="survey-cont d-flex justify-content-center align-items-center">
        <Figure className="d-flex flex-column justify-content-center align-items-center">
          <Figure.Image width="200px" height="200px" src={logoSrc} fluid />
          <Figure.Caption style={{ color: "#6a359f" }}>
            Atanmış herhangi bir anketiniz bulunmamaktadır
          </Figure.Caption>
        </Figure>
      </Container>
    </div>
  );
};

export default SurveyNotFound;
