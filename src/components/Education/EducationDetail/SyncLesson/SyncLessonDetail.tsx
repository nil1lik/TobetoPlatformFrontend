import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import {
  cameraIcon,
  companyIcon,
  endDateIcon,
  startDateIcon,
  userIcon,
} from "../../../../utilities/Constants/iconsList";
import EducationDetailAboutComp from "../EducationDetailAboutComp";
import "./syncLessonDetail.css";
import { GetCourseResponseItem } from "../../../../models/responses/course/getCourseResponse";
import { GetSyncLessonsByCourseIdItem } from "../../../../models/responses/course/getSyncLessonsByCourseId";
import syncLessonService from "../../../../services/syncLessonService";

type Props = {syncLessonId?: number;};

const SyncLessonDetail = (props: Props) => {
  const colSize = 3;
  const [courses, setCourses] = useState<GetCourseResponseItem[]>([]);
  const [syncLessons, setSyncLessons] = useState<
  GetSyncLessonsByCourseIdItem[]
>([]);

// const fetchSyncLesson = async () => {
//   try {
//     if (syncLessonId !== undefined) {
//       const result = await syncLessonService getByIdAsyncLessonDetail(asyncLessonId); 
//       setAsyncLessons(result.data);

//     }
//   } catch (error) {
//     console.error("API isteği sırasında bir hata oluştu:", error);
//   }
// }; 

// useEffect(() => {
//   fetchAsyncLesson();
// }, [asyncLessonId]);

  return (
    <div className="activity-content-info">
      <div className="activity-largeImageFileName no-video">
        <img src="https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg" />
      </div>
      <Card className="activity-card">
        <div className="activity-unit-detail">
          <Row>
            <Col lg={9}>
              <div className="unit-detail-title">.NET & React Fullstack</div>
              <div className="unit-detail-col unit-detail-col-default">
                Sanal Sınıf
              </div>
              <div className="unit-detail-col unit-detail-col-status last-child text-green">
                <i className="ss-icon ss-like" />
                Tebrikler, tamamladın!
              </div>
            </Col>
            <Col lg={3}>
              <div className="ant-space ant-space-vertical">
                <button
                  type="button"
                  className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn"
                >
                  <label className="ant-btn-text">DETAY</label>
                </button>
              </div>
            </Col>
          </Row>
          {/* buraya kadar lessonVideoDetail ile aynı */}
          <Row className="unit-detail-session-row">
            <div className="session-title">Oturumlar</div>
            <div className="session-detail">
              <div className="unit-detail-session-row">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <AccordionHeader className="accordion-button-session">
                      1. Oturum
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="ant-collapse-content-box">
                        <Row>
                          <EducationDetailAboutComp
                            colSize={colSize}
                            {...startDateIcon}
                            educationData="23 EKİ 2023 13:00"
                          />
                          <EducationDetailAboutComp
                            colSize={colSize}
                            {...endDateIcon}
                            educationData="23 EKİ 2023 16:00"
                          />
                        </Row>
                        <Row className="instructors-list">
                          <EducationDetailAboutComp
                            colSize={colSize}
                            {...userIcon}
                            educationData="burayı düzenle iconu ve yazıyı"
                          />
                        </Row>
                        <Row>
                          <EducationDetailAboutComp {...cameraIcon} />
                          <div className="session-record">
                            <span>
                              Oturumlara ilişkin kayıtlar, canlı oturumlar
                              tamamlandıktan sonra izlenebilir.
                            </span>
                          </div>
                          <div className="unit-session-list">
                            <Row>
                              <Col lg={9}>
                                <div className="session-archive-title">
                                  <span>903_6887_1-23.10.2023 13:00:00</span>
                                </div>
                              </Col>
                              <Col lg={3}>
                                <div className="ant-space ant-space-vertical">
                                  <button
                                    type="button"
                                    className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn"
                                  >
                                    <label className="ant-btn-text">
                                      KAYDI AÇ
                                    </label>
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                      </div>
                    </AccordionBody>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default SyncLessonDetail;
