import React, { useEffect, useState } from "react";
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
  endDateIcon,
  startDateIcon,
  userIcon,
} from "../../../../utilities/Constants/iconsList";
import EducationDetailAboutComp from "../EducationDetailAboutComp";
import "./syncLessonDetail.css";
import { GetSyncLessonsByCourseIdItem } from "../../../../models/responses/course/getSyncLessonsByCourseId";
import courseService from "../../../../services/courseService";
import {
  detailButton,
  sessionRecord,
  sessionTitle,
} from "../../../../utilities/Constants/constantValues";
import FormattedDate from "../../../../utilities/Helpers/FormattedDate";
import EducationOffcanvas from "../EducationOffcanvas";
import { GetLessonDetailBySyncLessonId } from "../../../../models/responses/syncLesson/getLessonDetailBySyncLessonId";
import syncLessonService from "../../../../services/syncLessonService";

type Props = { courseId?: number };

const SyncLessonDetail = (props: Props) => {
  const colSize = 3;
  const { courseId } = props;
  const [syncLessons, setSyncLessons] = useState<
    GetSyncLessonsByCourseIdItem[]
  >([]);
  const [syncLessonDetail, setSyncLessonDetail] = useState<GetLessonDetailBySyncLessonId | undefined>();

  const fetchSyncLesson = async () => {
    try {
      if (courseId !== undefined) {
        const result = await courseService.getSyncLessonsByCourseId(courseId);
        setSyncLessons(result.data.syncLessons);
        console.log("syncLessson: ", result.data.syncLessons);
      }
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchSyncLesson();
  }, [courseId]);

  return (

    <div className="activity-content-info">
      <div className="activity-largeImageFileName no-video">
        <img src="https://wallpapers.com/images/featured/blue-dgmxybg4kb7eab7x.jpg" />
      </div>
      <Card className="activity-card">
        <div className="activity-unit-detail">
          <Row>
            <Col lg={9}>
              <div className="unit-detail-title">
                {syncLessons.length > 0 && syncLessons[0].name}{" "}
              </div>
              <div className="unit-detail-col unit-detail-col-default">
                Sanal Sınıf
              </div>
              {/* <div className="unit-detail-col unit-detail-col-status last-child text-green">
                <i className="ss-icon ss-like" />
                Tebrikler, tamamladın!
              </div> */}
            </Col>
            <Col lg={3}>
              <div className="ant-space ant-space-vertical">
                <button
                  type="button"
                  className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn"
                  onClick={async () => {
                    handleShow();
                    try {
                      const detailResult = await syncLessonService.getLessonDetailBySyncLessonId(syncLessons[0].id);
                      setSyncLessonDetail(detailResult.data);
                    } catch (error) {
                      console.error("SyncLessonDetail getirirken bir hata oluştu:", error);
                    }
                  }}
                >
                  <label className="ant-btn-text">{detailButton}</label>
                  <div className="drawer">
                    <EducationOffcanvas
                      imageUrl="https://res.cloudinary.com/dcpbbqilg/image/upload/v1707391804/%C3%96%C4%9Frenme_Yolculu%C4%9Fu_ju5euf.jpg"
                      educationName={syncLessonDetail?.name} 
                      educationType="Sanal Sınıf"
                      category={syncLessonDetail?.videoDetailCategoryName}
                      language={syncLessonDetail?.languageName}
                      subcategory={syncLessonDetail?.subcategoryName}
                      likeCount={28}
                      button={true}
                      show={show}
                      hide={handleClose}
                    />
                    
                  </div>
                </button>
              </div>
            </Col>
          </Row>
          {/* buraya kadar lessonVideoDetail ile aynı */}
          <Row className="unit-detail-session-row">
            <div className="session-title">{sessionTitle}</div>
            <div className="session-detail">
              <div className="unit-detail-session-row">
                <Accordion defaultActiveKey="0">
                  {syncLessons.map((lesson, lessonIndex) => (
                    <Accordion.Item
                      eventKey={lessonIndex.toString()}
                      key={lessonIndex}
                    >
                      <AccordionHeader className="accordion-button-session">
                        {lesson.sessionName}
                      </AccordionHeader>
                      <AccordionBody>
                        <div className="ant-collapse-content-box">
                          <Row>
                            <EducationDetailAboutComp
                              colSize={colSize}
                              {...startDateIcon}
                              educationData={
                                <FormattedDate date={lesson.startDate} />
                              }
                            />
                            <EducationDetailAboutComp
                              colSize={colSize}
                              {...endDateIcon}
                              educationData={
                                <FormattedDate date={lesson.endDate} />
                              }
                            />
                          </Row>
                          <Row className="instructors-list">
                            <EducationDetailAboutComp
                              colSize={colSize}
                              {...userIcon}
                              educationData={lesson.instructorNames}
                              dataClassName="instructor-name"
                            />
                          </Row>
                          <Row>
                            <EducationDetailAboutComp {...cameraIcon} />
                            <div className="session-record">
                              <span>{sessionRecord}</span>
                            </div>
                            <div className="unit-session-list">
                              <Row>
                                <Col lg={9}>
                                  {/* <div className="session-archive-title">
                                  <span>903_6887_1-23.10.2023 13:00:00</span>
                                </div> */}
                                </Col>
                                <Col lg={3}>
                                  <div className="ant-space ant-space-vertical">
                                    <a
                                      href={lesson.syncVideoUrl}
                                      target="_blank"
                                      className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn"
                                    >
                                      <label className="ant-btn-text">
                                        KAYDI AÇ
                                      </label>
                                    </a>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Row>
                        </div>
                      </AccordionBody>
                    </Accordion.Item>
                  ))}
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
