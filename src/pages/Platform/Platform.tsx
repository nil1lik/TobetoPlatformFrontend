import React from "react";
import TobetoPlatformItem from "../../utilities/tobetoPlatform/TobetoPlatformItem";
import PlatformTab from "../../components/PlatformTab/PlatformTab";
import Exam from "../../components/Exam/Exam";
import { Col, Container, Row } from "react-bootstrap";
import "./platform.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

type Props = {};

const Platform = (props: Props) => {
  return (
    <>
      <Container className="main-cont">
        <Row className="justify-content-center align-items-center">
          <Col className="col-12 col-md-12">
            <Container>
              <Row>
                  <Col className="col-12 text-center mt-5">
                    <div className="mw-5xl mx-auto">
                      <h3>
                        <label className="text-secondary-platform">TOBETO</label>
                        <label className="fw-normal text-info1">'ya</label>
                        <label className="fw-normal text-info1">hoş geldin</label>
                      </h3>
                      <h4 className="fw-normal text-info1">Pair 1</h4>
                    </div>
                    <TobetoPlatformItem
                      // imageClass="dot-purple-svg"
                      // imageSrc="dot-purple.e0e5c9d8.svg"
                      text="Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!"
                    />
                  </Col>
              </Row>
              <Row className="content-cont text-center">
                <Row>
                  <TobetoPlatformItem
                    imageClass="ist-kod-png"
                    imageSrc="istanbulKodluyor.png"
                    text="Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al."
                  />
                  <label className="header-text-quot mt-4 mb-4">
                    Aradığın <span className="quot">"</span>İş<span className="quot">"</span>  Burada!
                  </label>
                </Row>
                <Row>
                  <PlatformTab />
                </Row>
              </Row> 
            </Container>
            <Container className="content-cont">
              <Exam />
            </Container>
            <br></br>
            <Container>
              <ProfileCard />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Platform;