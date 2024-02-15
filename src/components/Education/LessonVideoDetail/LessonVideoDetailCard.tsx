import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import asyncLessonService from "../../../services/asyncLessonService";
import { GetByIdAsyncLessonResponse } from "../../../models/responses/asyncLesson/getByIdAsyncLessonResponse";
import ReactPlayer from "react-player";

type Props = {
  asyncLessonId?: number;
};

const LessonVideoDetailCard = (props: Props) => {
  const { asyncLessonId } = props;
  const [asyncLesson, setAsyncLessons] = useState<GetByIdAsyncLessonResponse>();
  const fetchAsyncLesson = async () => {
    try {
      if (asyncLessonId !== undefined) {
        const result = await asyncLessonService.getById(asyncLessonId);
        setAsyncLessons(result.data);
        console.log(result.data);
      }
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchAsyncLesson();
  }, [asyncLessonId]);
  return (
    <Col>
      <div className="activity-content-info">
        <div className="activity-largeImageFileName activity-video">
          <div className="locked">
            {/* <img src="https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg" /> */}
            <ReactPlayer
              url={asyncLesson?.videoUrl}
              className="react-player"
              width="100%"
              height="100%"
              controls
            />

            {/* <source src={asyncLesson?.videoUrl} type="video/mp4" /> */}
            <i className="ss-icon ss-lock" />
          </div>
        </div>
        <Card className="activity-card">
          <div className="activity-unit-detail">
            <Row>
              <Col lg={9}>
                <div className="unit-detail-title">
                  <label>{asyncLesson?.name}</label>
                </div>
                <div className="unit-detail-col unit-detail-col-default">
                  {asyncLesson?.lessonTypeId} - {asyncLesson?.time}
                </div>
                <div className="unit-detail-col unit-detail-col-score text-green">
                  {/* {props.point} PUAN */} 100 PUAN
                </div>
                <div className="unit-detail-col unit-detail-col-status last-child text-green">
                  <i className="ss-icon ss-like" />
                  Tebrikler, tamamladın!
                </div>
              </Col>
              {/* <Col lg={3}>
                  <div className="ant-space ant-space-vertical">
                    <button
                      type="button"
                      className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn"
                      onClick={handleShow}
                    >
                      <label className="ant-btn-text">DETAY</label>
                      <div className="drawer">
                        <EducationOffcanvas
                          imageUrl="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=DiBldjEKnwKDQVcjzXYj%2bUxp8rPm9JXZ"
                          educationName={props.educationTitle}
                          // educationType={props.lessonType}
                          timeSpent={props.educationTime}
                          category={props.educationCategory}
                          language={props.educationLanguage}
                          company={props.educationCompany}
                          subcategory={props.educationSubcategory}
                          likeCount={props.likeCount}
                          point={100}
                          button={true}
                          show={show}
                          hide={handleClose}
                        />
                      </div>
                    </button>
                  </div>
                </Col> */}
            </Row>
          </div>
        </Card>
      </div>
    </Col>
  );
};

export default LessonVideoDetailCard;
