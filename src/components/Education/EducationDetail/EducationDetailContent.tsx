import React, { useEffect, useState } from "react";
import "./educationDetailContent.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import courseService from "../../../services/courseService";
import {
  AccordionEventKey,
  AccordionSelectCallback,
} from "react-bootstrap/esm/AccordionContext";
import { GetCourseResponseItem } from "../../../models/responses/course/getCourseResponse";
import { GetAsyncLessonsByCourseIdItem } from "../../../models/responses/course/getAsyncLessonsByCourseId";
import FormattedDate from "../../../utilities/Helpers/FormattedDate";
import LessonVideoDetailCard from "../LessonVideoDetail/LessonVideoDetailCard";
import educationService from "../../../services/educationService";
import SyncLessonDetail from "./SyncLesson/SyncLessonDetail";

type Props = {
  educationDetailId?: number;
  courseId?: number;
  educationTitle?: string;
  educationSubTitle?: string;
  lessonType?: string;
  educationTime: string;
  educationCategory: string;
  educationLanguage: string;
  educationCompany: string;
  educationSubcategory: string;
  likeCount: number;
};

const EducationDetailContent = (props: Props) => {
  const { educationDetailId } = props;
  const completedIcon = "/images/completed.svg";
  const [show, setShow] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const [courses, setCourses] = useState<GetCourseResponseItem[]>([]);
  const [asyncLessons, setAsyncLessons] = useState<
    GetAsyncLessonsByCourseIdItem[]
  >([]);
  const [selectedAsyncLessonId, setSelectedAsyncLessonId] = useState<number | undefined>(undefined);


  const fetchEducationDetail = async () => {
    try {
      const result = await courseService.getAll(0, 10);
      if (educationDetailId !== undefined) {
        const result = await educationService.getCoursesByEducationId(
          educationDetailId
        );
        setCourses(result.data.items);
      }
      const filteredCourses = result.data.items.filter(
        (course) => course.educationPathId == props.educationDetailId
      );
      setCourses(filteredCourses);
      console.log(props.educationDetailId);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const handleAccordionClick: AccordionSelectCallback = (
    eventKey: AccordionEventKey
  ) => {
    setActiveKey(typeof eventKey === "string" ? eventKey : null);
  };

  const handleHeaderClick = async (courseId: number) => {
    try {
      setAsyncLessons([]);

      const response = await courseService.getAsyncLessonsByCourseId(courseId);
      const lessons = response.data.asyncLessons;
      setAsyncLessons(lessons);
      console.log("asyncLessons:", asyncLessons);
      console.log("Async lessons for courseId:", courseId, lessons);
    } catch (error) {
      console.error("Error fetching async lessons:", error);
    }
  };

  const handleSubtitleClick = async (asyncLessonId: number) => {
    setSelectedAsyncLessonId(asyncLessonId);
  };

  useEffect(() => {
    fetchEducationDetail();
  }, [educationDetailId, selectedAsyncLessonId]);
  return (
    <Container>
      <div className="accordion-container">
        <Row className="activity-row">
          <Col className="col-lg-5">
            <Accordion activeKey={activeKey} onSelect={handleAccordionClick}>
              {courses &&
                courses.length > 0 &&
                courses.map((educationCourses, index) => (
                  <AccordionItem key={index} eventKey={index.toString()}>
                    <AccordionHeader
                      className="education-title"
                      onClick={() => handleHeaderClick(educationCourses.id)}
                    >
                      {educationCourses.name}
                    </AccordionHeader>
                    <div>
                      {asyncLessons.map((lesson, lessonIndex) => (
                        <AccordionBody
                          className="education-subtitle"
                          role="button"
                          onClick={() => handleSubtitleClick(lesson.id)}
                        >
                          <div key={lessonIndex}>
                            {lesson.id} 
                            {lesson.name}
                            <AccordionBody className="education-type">
                              {lesson.lessonType} -{" "}
                              {
                                <FormattedDate
                                  date={lesson.time}
                                  format="minute"
                                />
                              }
                            </AccordionBody>
                          </div>
                        </AccordionBody>
                      ))}
                    </div>
                  </AccordionItem>
                ))}
            </Accordion>
          </Col>

          <Col>
            <Row>
              <LessonVideoDetailCard asyncLessonId={selectedAsyncLessonId}/>
              {/* <SyncLessonDetail></SyncLessonDetail> */}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EducationDetailContent;
