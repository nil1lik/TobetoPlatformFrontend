import React from "react";
import Calendar from "./Calendar";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import "./calendar.css";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";
import { Container } from "react-bootstrap/lib/Tab";
import SearchBar from "../../components/SearchBar/SearchBar";

type Props = {};
const CalendarDetail = (props: Props) => {
  const calendarProps = {
    id: "1",
    title: ".net & react full stack",
    instructor: "Engin Demirog",
    start: new Date().toISOString().split("T")[0] + "T13:15",
  };
  return (
    <div>
      <Row className="mt-5">
        <Col xs={3}>
          <div className="filter-left equal-box">
            <div className="d-flex flex-column">
              <label className="label-header">Eğitim Arama</label>
              <SearchBar searchBoxClassName="calendar-search-box" formClassName="calendar-form-control mr-sm-2"/>
              {/* <input
                type="text"
                placeholder="Eğitim arayın.."
                className="cal-filter-input"
              /> */}
            </div>
            <div className="d-flex flex-column">
              <label className="label-header">Eğitmen</label>
              <Dropdown className=" calender-select dropdown-calendar">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn-calendar dropdown-toggle-calendar">
                  <div className="css-14cgata-control">
                    <div className="css-hlgwow">
                      <div className="css-1jqq78npmo-placeholder" >Eğitmen Seçiniz...</div>
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
                  <Dropdown.Item className="dropdown-item insturctor-dropdown-calendar" href="#/action-1">Engin Demirog</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item insturctor-dropdown-calendar" href="#/action-2"> Halit Enes Kalaycı</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item insturctor-dropdown-calendar" href="#/action-3">İrem hoca</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item insturctor-dropdown-calendar" href="#/action-1">Engin Demirog</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item insturctor-dropdown-calendar" href="#/action-2"> Halit Enes Kalaycı</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item insturctor-dropdown-calendar" href="#/action-3">İrem hoca</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item insturctor-dropdown-calendar" href="#/action-1">Engin Demirog</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item insturctor-dropdown-calendar" href="#/action-2"> Halit Enes Kalaycı</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item insturctor-dropdown-calendar" href="#/action-3">İrem hoca</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex flex-column">
              <label className="label-header">Eğitim Durumu</label>
              <div className="check-class">
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Bitmiş Dersler"
                        id={`inline-${type}-1`}
                        className="form-check-label form-check-input form-check-input-calendar form-check-label-calendar checkEventEnded "
                      />
                      <br />
                      <Form.Check
                        inline
                        label="Devam Eden Dersler"
                        id={`inline-${type}-1`}
                        className="form-check-label form-check-input form-check-input-calendar form-check-label-calendar checkEventContinue"
                      />
                      <br />
                      <Form.Check
                        inline
                        label="Satın Alınmış Dersler"
                        id={`inline-${type}-1`}
                        className="form-check-label form-check-input form-check-input-calendar form-check-label-calendar checkEventBuyed"
                      />
                      <br />
                      <Form.Check
                        inline
                        label="Başlanmamış Dersler"
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
          <Calendar {...calendarProps} />
        </Col>
      </Row>
    </div>
  );
};

export default CalendarDetail;
