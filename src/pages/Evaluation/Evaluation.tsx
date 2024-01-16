import React from "react";
import "../../pages/Evaluation/evaluation.css";
import { Col, Container, Row } from "react-bootstrap";
import ExamLink from "./ExamLink";
import EvolationInformation from "./EvolationInformation";

type Props = {};

const Evaluation = (props: Props) => {
  return (
    <>
      <Container className="text-center py-5">
        <div className="mw-5xl mx-auto">
          <h3>
            <label className="text-secondary1"> Yetkinlik</label>
            <label className="text-info1">lerini</label>
            <label className="text-info1"> ücretsiz ölç,</label>
            <label className="text-secondary1">bilgi</label>
            <label className="text-info1">lerini</label>
            <label className="text-info1"> test et</label>
          </h3>
        </div>
      </Container>
      <Container className="mt-8">
        <Row className="justify-content-center align-items-center">
          <Col className="col-12 col-md-10 mb-8">
            <div className="dashboard-card">
              <label>Tobeto İşte Başarı Modeli</label>
              <p>
                80 soru ile yetkinliklerini
                <b>ölç,</b>
                önerilen eğitimleri
                <b>tamamla,</b>
                rozetini
                <b>kazan.</b>
              </p>
              <a className="btn" href="#">
                Başla
              </a>
            </div>
          </Col>
          <Col className="col-12 col-md-5 mb-8 mt-5">
            <div className="dashboard-card1 equal-box">
              <label>Yazılımda başarı testi</label>
              <p>
                Çoktan seçmeli sorular ile teknik bilgini
                <b>test et.</b>
              </p>
              <label className="text-white">&#62;&#62;&#62;</label>
            </div>
          </Col>
          <Col className="col-12 col-md-5 mb-8 mt-5">
            <div className="d-flex flex-column equal-box" style={{ gap: 14 }}>
              <ExamLink title="Front End"></ExamLink>
              <ExamLink title="Full Stack"></ExamLink>
              <ExamLink title="Back End"></ExamLink>
              <ExamLink title="Microsoft SQL Server"></ExamLink>
              <ExamLink title="Masaüstü Programlama"></ExamLink>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-center py-5">
        <div className="position-relative">
          <div className="gradient-line3 mt-5"></div>
          <div className="mw-5xl mx-auto">
            <h3>
              <label className="text-secondary1"> Aboneliğe özel</label>
              &nbsp;
              <label className="text-info1"> değerlendirme araçları için</label>
            </h3>
          </div>
        </div>
      </Container>
      <Container className="mt-2 mb-20">
        <Row className="justify-content-center align-items-center">
          <EvolationInformation 
            title="Kazanım Odaklı Testler"
            description="Dijital gelişim kategorisindeki eğitimlere başlamadan öncekonuyla ilgili bilgin ölçülür ve seviyene göre yönlendirilirsin."
          />
          <EvolationInformation
            title="Huawei Talent Interview
            Teknik Bilgi Sınavı*"
            italic="Sertifika alabilmen için, "
            description=" eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod bilgin ölçülür."
            description2="4400+ soru | 30+ programlama dili
            4 zorluk seviyesi"
            info="*Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır."
          />
        </Row>
      </Container>
    </>
  );
};

export default Evaluation;
