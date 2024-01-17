import React from "react";
import { Card, Row } from "react-bootstrap";
import "../../components/Exam/exam.css"

type Props = {};

const Exam = (props: Props) => {
  return (
      <div className="row cv-box cv-padding">

        <div className="col-12 position-relative">
          <Card.Text>Sınavlarım</Card.Text>
        </div>
        <div className="exams my-3">
          <Card className="card-transition">
            <Card.Body className="exam-card card-title h5">
              <Card.Title> 
                Herkes İçin Kodlama 1A Değerlendirme Sınavı
              </Card.Title>
              <Card.Img className="status-done"
                  src={process.env.PUBLIC_URL + "/images/status-done.svg"} />
              <Card.Subtitle className="mb-2 text-muted">
                Herkes İçin Kodlama - 1A
              </Card.Subtitle>
              <div className="exam-icon-text">
              <Card.Img
                  className="exam-time"
                  src={process.env.PUBLIC_URL + "/images/examTime.svg"}/>
                  <Card.Text className="exam-time-text">45 Dakika</Card.Text>
                  </div>
            </Card.Body>
          </Card>
        </div>
      </div>
  );
};

export default Exam;
