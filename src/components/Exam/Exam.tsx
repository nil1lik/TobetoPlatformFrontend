import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import "../../components/Exam/exam.css";
import ExamService from "../../services/examService";
import { GetExamItem } from "../../models/responses/exam/getExam";
import Popup from "../Popup/Popup";

type Props = {};

const Exam = (props: Props) => {
  const [exam, setExams] = useState<GetExamItem[]>([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchExam = async () => {
    try {
      const result = await ExamService.getByFilter(0, 1);
      setExams(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchExam();
  }, []);

  //   examService.getExam().then((result) => {
  //     setExam(result.data.items);
  //   });
  // }, []);

  return (
    <div className="row cv-box cv-padding" onClick={handleShow}>
      <div className="col-12 position-relative">
        <Card.Text>Sınavlarım</Card.Text>
      </div>
      <div className="exams my-3">
        <Card className="card-transition">
          {exam.map((exam) => (
            <>
              <Card.Body key={exam.id} className="exam-card card-title h5">
                <Card.Title>{exam.name}</Card.Title>
                <Card.Img
                  className="status-done"
                  src={process.env.PUBLIC_URL + "/images/status-done.svg"}
                />
                <Card.Subtitle className="mb-2 text-muted">
                  {exam.description}
                </Card.Subtitle>
                <div className="exam-icon-text">
                  <Card.Img
                    className="exam-time"
                    src={process.env.PUBLIC_URL + "/images/examTime.svg"}
                  />
                  <Card.Text className="exam-time-text">
                    {exam.duration}
                  </Card.Text>
                </div>
              </Card.Body>
            </>
          ))}
        </Card>
      </div>
      <Popup
        key={1}
        title="TEST TİTLE"
        description="TEST DESCRIPTION"
        button={true}
        show={show}
        hide={handleClose}
      />
    </div>
  );
};

export default Exam;
