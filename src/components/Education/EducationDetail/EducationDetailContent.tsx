import React, { useEffect, useState } from "react";
import "./educationDetailContent.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
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
import SyncLessonDetail from "./SyncLesson/SyncLessonDetail";
import FormattedTime from "../../../utilities/Helpers/FormattedTime";
import LessonVideoDetailCard from "../LessonVideoDetail/LessonVideoDetailCard";
import { GetSyncLessonsByCourseIdItem } from "../../../models/responses/course/getSyncLessonsByCourseId";

type Props = {
  educationDetailId?: number;
};

const EducationDetailContent = (props: Props) => {
  const { educationDetailId } = props;
  const completedIcon = "/images/completed.svg";
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const [courses, setCourses] = useState<GetCourseResponseItem[]>([]);
  const [asyncLessons, setAsyncLessons] = useState<
    GetAsyncLessonsByCourseIdItem[]
  >([]);

  const [selectedAsyncLessonId, setSelectedAsyncLessonId] = useState<
    number | null
  >(null);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  const fetchDefaultLesson = async () => {
    try {
      const result = await courseService.getAll(0, 40);
      const filteredCourses = result.data.items.filter(
        (course) => course.educationPathId === educationDetailId
      );
      if (filteredCourses.length > 0) {
        const defaultCourseId = filteredCourses[0].id;
        setSelectedCourseId(defaultCourseId);
        const asyncResponse = await courseService.getAsyncLessonsByCourseId(
          defaultCourseId
        );
        setAsyncLessons(asyncResponse.data.asyncLessons);
        if (asyncResponse.data.asyncLessons.length > 0) {
          setSelectedAsyncLessonId(asyncResponse.data.asyncLessons[0].id);
        }
      }
      setCourses(filteredCourses);
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
      const asyncResponse = await courseService.getAsyncLessonsByCourseId(
        courseId
      );

      setAsyncLessons(asyncResponse.data.asyncLessons);
    } catch (error) {
      console.error("Error fetching async lessons:", error);
    }
  };

  const handleSubtitleClick = async (asyncLessonId: number) => {
    setSelectedAsyncLessonId(asyncLessonId);
  };

  useEffect(() => {
    fetchDefaultLesson();
  }, [educationDetailId]);
  console.log("selectedCourseId ", selectedCourseId);
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
                          key={lessonIndex}
                          className="education-subtitle"
                          role="button"
                          onClick={() => handleSubtitleClick(lesson.id)}
                        >
                          <div>
                            {lesson.name}
                            <AccordionBody className="education-type">
                              {lesson.lessonType} -{" "}
                              {<FormattedTime time={lesson.time} />}
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
              {selectedAsyncLessonId && (
                <LessonVideoDetailCard asyncLessonId={selectedAsyncLessonId} />
              )}
              {selectedCourseId !== null && !selectedAsyncLessonId && (
                <SyncLessonDetail courseId={selectedCourseId} />
              )}
            </Row>
          </Col> 
        </Row>
      </div>
    </Container>
  );
};

export default EducationDetailContent;
