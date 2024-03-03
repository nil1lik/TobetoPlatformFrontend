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
  courseId?: number;
};

const EducationDetailContent = (props: Props) => {
  const { educationDetailId } = props;
  const completedIcon = "/images/completed.svg";
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const [courses, setCourses] = useState<GetCourseResponseItem[]>([]);
  const [asyncLessons, setAsyncLessons] = useState<
    GetAsyncLessonsByCourseIdItem[]
  >([]);
  const [syncLessons, setSyncLessons] = useState<
    GetSyncLessonsByCourseIdItem[]
  >([]);
  const [selectedAsyncLessonId, setSelectedAsyncLessonId] = useState<
    number | null
  >(null);
  const [selectedSyncLessonId, setSelectedSyncLessonId] = useState<
    number | null
  >(10); //null

  const fetchEducationDetail = async () => {
    try {
      // if (educationDetailId !== undefined) {
      //   const result = await educationService.getCoursesByEducationId(
      //     educationDetailId
      //   );
      //   setCourses(result.data.items);
      // }
      const result = await courseService.getAll(0, 40);
      const filteredCourses = result.data.items.filter(
        (course) => course.educationPathId == props.educationDetailId
      );
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
      setAsyncLessons([]);
      setSyncLessons([]);

      const response = await courseService.getAsyncLessonsByCourseId(courseId);
      const lessons = response.data.asyncLessons;
      setAsyncLessons(lessons);
    } catch (error) {
      console.error("Error fetching async lessons:", error);
    }
  };

  const handleSubtitleClick = async (syncLessonId: number) => {
    setSelectedSyncLessonId(syncLessonId);
    console.log("syncLessonId", syncLessonId);
  };

  useEffect(() => {
    fetchEducationDetail();
  }, [educationDetailId, selectedAsyncLessonId, selectedSyncLessonId]);
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
              {selectedAsyncLessonId !== null && (
                <LessonVideoDetailCard asyncLessonId={selectedAsyncLessonId} />
              )}
              {selectedSyncLessonId !== null && (
                <SyncLessonDetail syncLessonId={10} />
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EducationDetailContent;
