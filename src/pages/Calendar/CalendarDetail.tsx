import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import "./calendar.css";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";
import { Container } from "react-bootstrap/lib/Tab";
import SearchBar from "../../components/SearchBar/SearchBar";
import { GetInstructor, GetInstructorItem } from "../../models/responses/instructor/getInstructorResponse";
import instructorService from "../../services/instructorService";
import { EducationStatusText, calendarDropboxLabel, calendarDropboxPlaceholderText, calendarSearchBoxLabel } from "../../utilities/Constants/constantValues";
import { GetCalendarItem } from "../../models/responses/calendar/getCalendarResponse";
import calendarService from "../../services/calendarService";

type Props = {};
const CalendarDetail = (props: Props) => {
  
  const [instructor, setInstructor] = useState<GetInstructorItem[]>([])

  const fetchInstructor = async () => {
    try {
      const result = await instructorService.getByFilter(0, 50);
      console.log(result)
      setInstructor(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchInstructor();
  },[]);


  return (
    <div>
      <Row className="mt-5">
        <Col xs={3}>
          <div className="filter-left equal-box">
            <div className="d-flex flex-column">
              <label className="label-header">{calendarSearchBoxLabel}</label>
              <SearchBar searchBoxClassName="calendar-search-box" formClassName="calendar-form-control mr-sm-2"/>
              {/* <input
                type="text"
                placeholder="Eğitim arayın.."
                className="cal-filter-input"
              /> */}
            </div>
            <div className="d-flex flex-column">
              <label className="label-header">{calendarDropboxLabel}</label>
              <Dropdown className=" calender-select dropdown-calendar">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn-calendar dropdown-toggle-calendar">
                  <div className="css-14cgata-control">
                    <div className="css-hlgwow">
                      <div className="css-1jqq78npmo-placeholder" >{calendarDropboxPlaceholderText}</div>
                    </div>
                  <div className="css-1wy0on6">
                  <span className="dropdown-indicatorSeparator"></span>
                  <span className="dropdown-indicatorContainer">
                  <svg
                    xmlns="/images/navbar-dropdown-toggle.svg"
                    width={20}
                    height={20}
                    viewBox="3 2 20 20"
                    fill="none"
                    className="dropdown-toggle-svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="dropdown-toggle-svg-path"
                    ></path>
                  </svg>
                </span>
                  </div>
                  </div>
                </Dropdown.Toggle>
                
                <Dropdown.Menu className="dropdown-menu-calendar">
                  {instructor.map(instructor => (
                    <Dropdown.Item className="dropdown-item insturctor-dropdown-calendar" eventKey={instructor.id}>{`${instructor.firstName} ${instructor.lastName}`}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex flex-column">
              <label className="label-header">{EducationStatusText.checkboxesHeader}</label>
              <div className="check-class">
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label={EducationStatusText.label1text}
                        id={`inline-${type}-1`}
                        className="form-check-label form-check-input form-check-input-calendar form-check-label-calendar checkEventEnded "
                      />
                      <br />
                      <Form.Check
                        inline
                        label={EducationStatusText.label2text}
                        id={`inline-${type}-1`}
                        className="form-check-label form-check-input form-check-input-calendar form-check-label-calendar checkEventContinue"
                      />
                      <br />
                      <Form.Check
                        inline
                        label={EducationStatusText.label3text}
                        id={`inline-${type}-1`}
                        className="form-check-label form-check-input form-check-input-calendar form-check-label-calendar checkEventBuyed"
                      />
                      <br />
                      <Form.Check
                        inline
                        label={EducationStatusText.label4text}
                        id={`inline-${type}-1`}
                        className="form-check-label form-check-input form-check-input-calendar form-check-label-calendar checkEventNotStarted"
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={9}>
          <Calendar/>
        </Col>
      </Row>
    </div>
  );
};

export default CalendarDetail;
