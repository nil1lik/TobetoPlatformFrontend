import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import asyncLessonService from "../../../services/asyncLessonService";
import { GetByIdAsyncLessonResponse } from "../../../models/responses/asyncLesson/getByIdAsyncLessonResponse";
import ReactPlayer from "react-player";
import EducationOffcanvas from "../EducationDetail/EducationOffcanvas";
import { detailButton, pointText } from "../../../utilities/Constants/constantValues";
import FormattedTime from "../../../utilities/Helpers/FormattedTime";
import { useAuthContext } from "../../../contexts/AuthContext";
import userProfileLessonService from "../../../services/userProfileLessonService";
import { UpdateProfileLessonRequest } from "../../../models/requests/profileLesson/updateProfileLessonRequest";

type Props = {
  asyncLessonId?: number;
};

const LessonVideoDetailCard = (props: Props) => {
  const { asyncLessonId } = props;
  const [asyncLesson, setAsyncLesson] = useState<GetByIdAsyncLessonResponse>();
  const { userId } = useAuthContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleVideoEnded = async (lessonId: number | undefined) => {
    try {
      if (lessonId !== undefined) {
        const updateProfileLessonRequest: UpdateProfileLessonRequest = {
          userProfileId: Number(userId),
          asyncLessonId: lessonId,
          isWatched: true
        };
        const response = await userProfileLessonService.updateProfileLesson(updateProfileLessonRequest);
  
        if (response.status === 200) {
          console.log('Ders bilgileri başarıyla güncellendi.');
        } else {
          throw new Error('Ders bilgilerini güncelleme sırasında bir hata oluştu.');
        }
      }
    } catch (error) {
      console.error("Ders bilgilerini güncelleme sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    const fetchAsyncLesson = async () => {
      try {
        if (asyncLessonId !== undefined) {
          const result = await asyncLessonService.getByIdAsyncLessonDetail(asyncLessonId);
          setAsyncLesson(result.data);
        }
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };

    fetchAsyncLesson();
  }, [asyncLessonId]);

  return (
    <Col>
      <div className="activity-content-info">
        {asyncLesson && ( 
          <React.Fragment>
            <div className="activity-largeImageFileName activity-video">
              <div className="locked">
                <ReactPlayer
                  url={asyncLesson?.videoUrl}
                  className="react-player"
                  width="100%"
                  height="100%"
                  controls
                  onEnded={() => handleVideoEnded(asyncLesson?.id)}
                />
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
                      {asyncLesson?.lessonTypeName} - {<FormattedTime time={asyncLesson?.time}/>}
                    </div>
                    <div className="unit-detail-col unit-detail-col-score text-green">
                      {asyncLesson?.videoPoint} {pointText}
                    </div>
                    <div className="unit-detail-col unit-detail-col-status last-child text-green">
                      <i className="ss-icon ss-like" />
                      Hadi Başlayalım!
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="ant-space ant-space-vertical">
                      <button
                        type="button"
                        className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn"
                        onClick={handleShow}
                      >
                        <label className="ant-btn-text">{detailButton}</label>
                        <div className="drawer">
                          <EducationOffcanvas
                            imageUrl="https://res.cloudinary.com/dcpbbqilg/image/upload/v1707391804/%C3%96%C4%9Frenme_Yolculu%C4%9Fu_ju5euf.jpg"
                            educationName={asyncLesson?.name}
                            educationType= {asyncLesson?.lessonTypeName}
                            time={asyncLesson?.time}
                            category={asyncLesson?.videoDetailCategoryName}
                            language={asyncLesson?.languageName}
                            company={asyncLesson?.companyName}
                            subcategory={asyncLesson?.subcategoryName}
                            likeCount= {100}
                            point={asyncLesson?.videoPoint}
                            button={true}
                            show={show}
                            hide={handleClose}
                          />
                        </div>
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </React.Fragment>
        )}
      </div>
    </Col>
  );
};

export default LessonVideoDetailCard;
