import React from "react";
import TobetoPlatformItem from "../../utilities/tobetoPlatform/TobetoPlatformItem";
import imageSize from "../../enums/imageSize";
import PlatformTab from "../../components/PlatformTab/PlatformTab";
import Exam from "../../components/Exam/Exam";
import { Col, Container, Row } from "react-bootstrap";
import "./platform.css";

type Props = {};

const Platform = (props: Props) => {
  return (
    <>
      <Container className="main-cont">
        <Row>
          <Row>
            <Col>
              <TobetoPlatformItem
                imageClass="dot-purple-svg"
                imageSrc="dot-purple.e0e5c9d8.svg"
              />
            </Col>
          </Row>
        </Row>
        <Row className="content-cont">
          <Row>
            <TobetoPlatformItem
              imageClass="ist-kod-png"
              imageSrc="istanbulKodluyor.png"
            />
          </Row>
          <Row>
            <PlatformTab />
          </Row>
        </Row>
      </Container>
      <Container className="content-cont">
        <Exam></Exam>
      </Container>
    </>
  );
};

export default Platform;
