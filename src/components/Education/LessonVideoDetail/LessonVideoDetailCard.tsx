import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import EducationOffcanvas from '../EducationDetail/EducationOffcanvas'

type Props = {}

type State = {}

class LessonVideoDetailCard extends Component<Props, State> {
  state = {}

  render() {
    return (
        <Col>
        <div className="activity-content-info">
          <div className="activity-largeImageFileName activity-video">
            <div className="locked">
              <img src="https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg" />
              <i className="ss-icon ss-lock" />
            </div>
          </div>
          <Card className="activity-card">
            <div className="activity-unit-detail">
              <Row>
                <Col lg={9}>
                  <div className="unit-detail-title">
                    <label>educationTitle</label>
                  </div>
                  <div className="unit-detail-col unit-detail-col-default">
                    lessonType - educationTime
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
    )
  }
}

export default LessonVideoDetailCard