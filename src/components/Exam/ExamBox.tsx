import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import "../../components/Exam/exam.css";
import ExamService from "../../core/services/examService";
import { GetExamItem } from "../../models/responses/exam/getExam";
import ExamCard from "./ExamCard"

type Props = {};

const Exam = (props: Props) => {
  const [exam, setExams] = useState<GetExamItem[]>([]);

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
    <div className="row cv-box cv-padding">
      <div className="col-12 position-relative">
        <Card.Text>Sınavlarım</Card.Text>
      </div>
      <div className="exams my-3">
        {exam.map((exam) => (
          <ExamCard id={exam.id} name={exam.name} description={exam.description} duration={exam.duration} />
        ))}
      </div>
    </div>
  );
};

export default Exam;
