import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./educationDetail.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import SurveyNotFound from "../../components/Survey/SurveyNotFound";


type Props = {};

const EducationDetail = (props: Props) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="page-content activity-detail"> 
            <div className="activity-detail-header">
              <Row>
                <Col xs={3}>
                  <img
                    className="detail-header-image"
                    src={
                      process.env.PUBLIC_URL +
                      "https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg"
                    }
                  />
                  
                </Col>
                <Col xs={9}>
                  <Row>
                    <Col >
                      <Row >
                        <Col className="activity-info">
                          <label className="h3">
                            Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
                          </label>
                          <div className="date-info-container">
                            <div className="date-info text-green">
                              <i className="ss-icon ss-like" />
                              <label>Tamamladın</label>
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="admiration-cont">
                            <div className="activity-score">100 Puan</div>
                            <div className="like">
                              <div className="like-area">
                                <div className="like-button">
                                  <div className="main-content">
                                    <img
                                      className="add-favorite-img"
                                      src={
                                        process.env.PUBLIC_URL +
                                        "/images/heart.svg"
                                      }
                                    />
                                  </div>
                                </div>
                                <label className="like-text">255</label>
                              </div>
                            </div>
                            <div className="add-favorite">
                              <img
                                className="add-favorite-img"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/images/add-favorite.svg"
                                }
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <div className="progress-bar">
                        <div className="ant-progress-outer">
                          <ProgressBar className="progress-inner" now={100} />
                        </div>
                        <label className="progress-text">100%</label>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="activity-detail-tabs">
        <div className="ant-tabs ant-tabs-top">
          <div className="tablist">
            <Tabs
              defaultActiveKey="icerik"
              transition={false}
              id="noanim-tab-example"
              className="mb-3 platform-tab ant-tabs-nav"
            >
              <Tab eventKey="icerik" title="İçerik"></Tab> 
              <Tab eventKey="hakkında" title="Hakkında"></Tab>
            </Tabs>
          </div>

          <div className="ant-tabs-content-holder">
            <div className="activity-content">
              <Row>
                <Col xs={5}>
                  <div className="ScrollbarsCustom">
                    <div className="ScrollbarsCustom-Wrapper">
                      <div className="ScrollbarsCustom-Scroller">
                        <div className="ScrollbarsCustom-Content">
                          <div className="unit-info selected">
                            <div className="unit-info-left-block">
                              <div className="unit-info-title">
                                Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
                              </div>
                              <div className="unit-info-left-block">
                                <div className="unit-info-type">
                                  <label className="unit-info-type-name">
                                    Video - 3 dk
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="unit-info-right-block">
                              <div className="unit-icon unit-completed"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="col-lg-7" xs={7}>
                  <div className="activity-content-info">
                    <div className="activity-largeImageFileName activity-video">
                      <div className="locked">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg"
                          }
                        />
                        <i className="ss-icon ss-lock" />
                      </div>
                      
                    </div>
                    <div className="activity-unit-detail">
                      <Row>
                        <Col xs={9}>
                          <div className="unit-detail-title">
                            <label>Dr. Ecmel Ayral'dan Hoşgeldin Mesajı</label>
                          </div>
                          <div className="unit-detail-col unit-detail-col-default">
                            <label>Video - 3 dk</label>
                          </div>
                          <div className="unit-detail-col unit-detail-col-score text-green">
                            100 Puan
                          </div>
                          <div className="unit-detail-col unit-detail-col-status last-child text-green">
                            <i className="ss-icon ss-like" />
                            Tebrikler, tamamladın!
                          </div>
                        </Col>
                        <Col xs={3}>
                          <div className="ant-space ant-space-vertical">
                            <button
                              type="button"
                              className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn"
                            >
                              <label>DETAY</label>
                            </button>
                          </div> 
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default EducationDetail;
