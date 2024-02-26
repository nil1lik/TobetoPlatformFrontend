import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../../components/Exam/exam.css";
import ExamService from "../../services/examService";
import { GetExamItem } from "../../models/responses/exam/getExam";
import ExamCard from "./ExamCard"
import { PlatformTabHeaders } from "../../utilities/Constants/constantValues";

type Props = {};

const Exams = (props: Props) => {
  const [exam, setExams] = useState<GetExamItem[]>([]);

  const fetchExam = async () => {
    try {
      const result = await ExamService.getByFilter(0, 1); //dinamikleşecek.
      setExams(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };
  useEffect(() => {
    fetchExam();
  }, []);

  return (
    <div className="row cv-box cv-padding">
      <div className="col-12 position-relative">
        <Card.Text key={"examheader"}>{PlatformTabHeaders.exams}</Card.Text>
      </div>
      <div className="exams my-3">
        {exam.map((exam) => (
          <ExamCard id={exam.id} name={exam.name} description={exam.description} duration={exam.duration} />
        ))}
      </div>
    </div>
  );
};

export default Exams;
